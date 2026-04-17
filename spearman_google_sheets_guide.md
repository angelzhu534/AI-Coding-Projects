# Spearman Correlation in Google Sheets - Quick Guide

## STEP 1: Code Your Categorical Variables as Numbers

### Your Variables Need Numeric Codes:

**Performance:**
- Strong = 3
- Adequate = 2
- Weak = 1

**Potential:**
- Strong = 3
- Adequate = 2
- Weak = 1

**Leaver Pulse:**
- High Risk = 3
- Medium Risk = 2
- Low Risk = 1
- Don't Know = blank (leave empty or exclude row)

**Retention (Dependent Variable):**
- Stayed = 1
- Left = 0

## STEP 2: Set Up Your Data in Google Sheets

### Example Layout:

```
   A              B            C          D              E
1  Teacher_ID  Performance  Potential  Leaver_Pulse  Retention
2  T001           3            3          2            1
3  T002           2            2          1            1
4  T003           1            1          3            0
5  T004           3            2          1            1
6  T005           2            2          2            1
7  T006           1            1          2            0
8  T007           3            3          1            1
```

**Key Points:**
- Each row = one teacher
- Each column = one variable
- Use ONLY numbers (no text in data rows)
- Header row with variable names

## STEP 3: Run Spearman Correlation

### Formula:
```
=CORREL(RANK.AVG(range1, range1, 1), RANK.AVG(range2, range2, 1))
```

### What This Does:
1. `RANK.AVG()` - Converts values to ranks (Spearman uses ranks, not raw values)
2. `CORREL()` - Calculates correlation between the ranks

### Example Correlations to Calculate:

**Performance → Retention**

In cell G2:
```
=CORREL(RANK.AVG(B2:B100,B2:B100,1), RANK.AVG(E2:E100,E2:E100,1))
```

**Potential → Retention**

In cell G3:
```
=CORREL(RANK.AVG(C2:C100,C2:C100,1), RANK.AVG(E2:E100,E2:E100,1))
```

**Leaver Pulse → Retention**

In cell G4:
```
=CORREL(RANK.AVG(D2:D100,D2:D100,1), RANK.AVG(E2:E100,E2:E100,1))
```

**Replace B2:B100, E2:E100, etc. with your actual data ranges**

## STEP 4: Create a Correlation Matrix (Recommended)

### Clean Output Table:

Set up labels:
```
     F              G
1              Retention
2  Performance    [formula]
3  Potential      [formula]
4  Leaver_Pulse   [formula]
```

**Formulas:**
- G2: `=CORREL(RANK.AVG(B:B,B:B,1), RANK.AVG(E:E,E:E,1))`
- G3: `=CORREL(RANK.AVG(C:C,C:C,1), RANK.AVG(E:E,E:E,1))`
- G4: `=CORREL(RANK.AVG(D:D,D:D,1), RANK.AVG(E:E,E:E,1))`

**Note:** Using full column references (B:B) automatically excludes header row

## STEP 5: Interpret Results

### Correlation Coefficient (ρ) Range: -1 to +1

**Positive Correlation:**
- ρ = 0.7 to 1.0 → Strong positive (as performance ↑, retention ↑)
- ρ = 0.3 to 0.7 → Moderate positive
- ρ = 0.1 to 0.3 → Weak positive

**Negative Correlation:**
- ρ = -0.1 to -0.3 → Weak negative (as performance ↑, retention ↓)
- ρ = -0.3 to -0.7 → Moderate negative
- ρ = -0.7 to -1.0 → Strong negative

**No Correlation:**
- ρ ≈ 0 → No relationship

### Example Results:

```
Variable          Correlation with Retention
Performance             0.65    ← Strong positive!
Potential               0.42    ← Moderate positive
Leaver_Pulse           -0.58    ← Moderate negative (high risk = less retention)
```

**Interpretation:**
- Performance has strongest correlation with retention (ρ = 0.65)
- Higher performance ratings → higher retention
- Higher leaver pulse risk → lower retention (negative correlation makes sense)

## STEP 6: Statistical Significance (Optional but Important)

Google Sheets doesn't calculate p-values automatically. Use this approach:

### Quick Rule of Thumb (for n > 30):
- |ρ| > 0.35 → Usually significant (p < 0.05)
- |ρ| > 0.45 → Usually highly significant (p < 0.01)

### More Precise Calculation:

**For sample size n, calculate t-statistic:**
```
t = ρ × √(n-2) / √(1-ρ²)
```

In Google Sheets (assuming correlation in G2, sample size in H1):
```
=G2*SQRT(H1-2)/SQRT(1-G2^2)
```

Then check if |t| > 1.96 for significance at p < 0.05

## COMPLETE EXAMPLE SETUP

### Full Walkthrough:

**1. Raw Data (Columns A-E):**
```
Teacher_ID  Performance  Potential  Leaver_Pulse  Retention
T001            3           3            2            1
T002            2           2            1            1
T003            1           1            3            0
...
```

**2. Correlation Table (Columns G-H):**
```
     G                          H
1  Variable               Correlation
2  Performance    =CORREL(RANK.AVG(B:B,B:B,1),RANK.AVG(E:E,E:E,1))
3  Potential      =CORREL(RANK.AVG(C:C,C:C,1),RANK.AVG(E:E,E:E,1))
4  Leaver_Pulse   =CORREL(RANK.AVG(D:D,D:D,1),RANK.AVG(E:E,E:E,1))
```

**3. Results Might Look Like:**
```
Variable          Correlation
Performance           0.65
Potential             0.42
Leaver_Pulse         -0.58
```

## ALTERNATIVE: Use Add-on (Easier for Multiple Variables)

### XLMiner Analysis ToolPak (Free Add-on)

**Install:**
1. Extensions → Add-ons → Get add-ons
2. Search "XLMiner Analysis ToolPak"
3. Install

**Use:**
1. Extensions → XLMiner Analysis ToolPak → Start
2. Select "Correlation"
3. Choose your data range
4. Get full correlation matrix automatically

## TROUBLESHOOTING

### "Error: Did not converge"
- Check for blank cells in your data
- Make sure all values are numbers, not text
- Remove rows with "Don't Know" in Leaver Pulse

### All correlations = 0
- Check that you used RANK.AVG() in the formula
- Verify your data is numeric, not text

### Getting different results than expected
- Make sure coding is correct (Strong=3, Weak=1, not reversed)
- Check that Retention is coded 1=Stayed, 0=Left
- Verify no duplicate ranks

## NEXT STEPS FOR YOUR ANALYSIS

**October Deliverable:**

Create a simple summary table:
```
Variable          Correlation    Interpretation
Performance           0.65       Strong predictor of retention
Potential             0.42       Moderate predictor
Leaver_Pulse         -0.58       Good risk indicator
Compensation          0.28       Weak correlation
```

**Add visualization:**
- Create scatter plots (Performance vs. Retention)
- Color-code by region

**For stakeholders:**
"We found a strong correlation (ρ = 0.65) between teacher performance ratings and retention. Teachers rated 'Strong' have significantly higher retention rates than those rated 'Weak'."