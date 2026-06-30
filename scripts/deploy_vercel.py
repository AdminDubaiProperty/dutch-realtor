import os
import subprocess
from pathlib import Path

env_file = Path('/Users/eva/eva-workspace/.env.local')
for line in env_file.read_text().splitlines():
    if line.startswith('VERCEL_TOKEN='):
        os.environ['VERCEL_TOKEN'] = line.split('=', 1)[1]
        break
if not os.environ.get('VERCEL_TOKEN'):
    raise SystemExit('VERCEL_TOKEN missing')
subprocess.run(['vercel', 'deploy', '--prod', '--yes', '--token', os.environ['VERCEL_TOKEN']], check=True)
