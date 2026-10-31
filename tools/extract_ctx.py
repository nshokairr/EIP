"""Pull get_design_context code out of the session transcript into msrc/<Component>.tsx."""
import json, re, sys, os, glob
OUT = '/home/claude/eip/msrc'
files = sorted(glob.glob('/root/.claude/projects/-home-claude/*.jsonl'), key=os.path.getmtime)
found = {}
for fn in files:
    with open(fn) as f:
        for line in f:
            if 'assetPathPrefix' not in line:
                continue
            try:
                d = json.loads(line)
            except Exception:
                continue
            m = d.get('message', {})
            cs = m.get('content') if isinstance(m.get('content'), list) else []
            for c in cs:
                if c.get('type') != 'tool_result':
                    continue
                parts = c.get('content')
                texts = [p.get('text', '') for p in parts] if isinstance(parts, list) else [str(parts)]
                for t in texts:
                    if t.startswith('const assetPathPrefix'):
                        mm = re.search(r'export default function (\w+)', t)
                        if mm:
                            found[mm.group(1)] = t
for fn in glob.glob('/root/.claude/projects/-home-claude/*/tool-results/*'):
    if not (fn.endswith('.txt') or fn.endswith('.json')):
        continue
    try:
        arr = json.load(open(fn))
    except Exception:
        continue
    for p in arr if isinstance(arr, list) else []:
        t = p.get('text', '') if isinstance(p, dict) else ''
        if t.startswith('const assetPathPrefix'):
            mm = re.search(r'export default function (\w+)', t)
            if mm:
                found[mm.group(1)] = t
for name, t in found.items():
    open(os.path.join(OUT, name + '.tsx'), 'w').write(t)
    print(name, len(t), 'complete' if t.rstrip().endswith('}') else 'TRUNCATED')
