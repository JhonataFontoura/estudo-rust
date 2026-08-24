(function (global) {
  'use strict';

  function normalize(text) {
    return String(text || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function getSections() {
    if (typeof document === 'undefined') return [];

    return Array.from(document.querySelectorAll('.lesson')).map(function (section) {
      var titleNode = section.querySelector('.head h2, .lesson-head h2');
      var descriptionNode = section.querySelector('.head p, .lesson-head p');
      var sourceNode = section.querySelector('.source, .section-source');
      var subheadings = Array.from(section.querySelectorAll('.subheading')).map(function (node) {
        return {
          id: node.id || null,
          title: node.textContent.trim()
        };
      });

      return {
        id: section.id,
        title: titleNode ? titleNode.textContent.trim() : section.dataset.title || '',
        description: descriptionNode ? descriptionNode.textContent.trim() : '',
        source: sourceNode ? sourceNode.textContent.trim() : section.dataset.source || '',
        subheadings: subheadings,
        text: section.innerText.trim()
      };
    });
  }

  function listTopics() {
    return getSections().map(function (topic) {
      return {
        id: topic.id,
        title: topic.title,
        description: topic.description,
        source: topic.source,
        subheadings: topic.subheadings
      };
    });
  }

  function getTopic(id) {
    return getSections().find(function (topic) {
      return topic.id === id;
    }) || null;
  }

  function search(term) {
    var query = normalize(term);
    if (!query) return listTopics();

    return getSections()
      .filter(function (topic) {
        return normalize(topic.text).includes(query);
      })
      .map(function (topic) {
        return {
          id: topic.id,
          title: topic.title,
          description: topic.description,
          source: topic.source
        };
      });
  }

  function getStats() {
    var topics = getSections();
    var bySource = topics.reduce(function (acc, topic) {
      var key = topic.source || 'Sem categoria';
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});

    return {
      topics: topics.length,
      bySource: bySource,
      generatedAt: new Date().toISOString()
    };
  }

  global.RustStudyAPI = Object.freeze({
    listTopics: listTopics,
    getTopic: getTopic,
    search: search,
    getStats: getStats
  });
})(typeof window !== 'undefined' ? window : globalThis);
