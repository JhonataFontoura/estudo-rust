from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent
manifest = json.loads((ROOT / "manifest.json").read_text(encoding="utf-8"))

outputs = {
    "base": ROOT / "estudos" / "Codigo_base_completo.txt",
    "novo": ROOT / "estudos" / "Codigo_novo_completo.txt",
    "tools": ROOT / "estudos" / "ferramentas_completo.txt",
}

for key, output in outputs.items():
    content = "".join(
        (ROOT / path).read_text(encoding="utf-8")
        for path in manifest["sources"][key]
    )
    output.write_text(content, encoding="utf-8")
    print(f"{output.relative_to(ROOT)}: {len(content.splitlines())} linhas")
