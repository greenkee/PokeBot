import json, sys, numpy as np

for line in sys.stdin:
    # turn string input into JSON dict
    tmp = json.loads(line)

print("test")
print(tmp['type'])
print(json.dumps(["hello", "world"]))
