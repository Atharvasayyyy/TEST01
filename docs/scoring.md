# Scoring

For every scenario score each product:

- 0 = missed / wrong / unusable
- 1 = partially correct, noisy, or incomplete
- 2 = correct and actionable

Also record:

- TP = true positive
- FP = false positive
- FN = false negative

## Precision

TP / (TP + FP)

## Recall

TP / (TP + FN)

## Noise rate

FP / all findings

## Evidence score

0 = assertion only
1 = points to code but weak proof
2 = reproduces/proves the behavior

## Remediation score

0 = no fix / wrong fix
1 = partly useful
2 = correct, safe, targeted fix
