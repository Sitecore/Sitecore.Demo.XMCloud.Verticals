import React, { useState, useEffect } from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  Text: Field<string>;
}

export type LoanCalculatorProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ResultLine = ({ left, right }: { left: string; right: string }) => {
  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-auto">
        <span>{left}</span>
      </div>
      <div className="col-auto">
        <span className="fw-bold">{right}</span>
      </div>
    </div>
  );
};

export const Default = (props: LoanCalculatorProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  const MOCK_DATA = {
    minAmount: 1000,
    maxAmount: 80000,
    minTerm: 12,
    maxTerm: 120,
    interestRate: 6.95,
    bankFee: 499.99,
    currency: 'euro',
    termType: 'mo.',
  };

  const [loanAmount, setLoanAmount] = useState(
    Math.round((MOCK_DATA.minAmount + MOCK_DATA.maxAmount) / 2)
  );
  const [loanTerm, setLoanTerm] = useState(Math.round((MOCK_DATA.minTerm + MOCK_DATA.maxTerm) / 2));
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalDebt, setTotalDebt] = useState(0);
  const [apr, setApr] = useState(0);

  useEffect(() => {
    const monthlyInterestRate = MOCK_DATA.interestRate / 100 / 12;

    const totalDebtCalculation =
      loanAmount * (1 + monthlyInterestRate * loanTerm) + MOCK_DATA.bankFee;
    setTotalDebt(totalDebtCalculation);

    const monthlyPaymentCalculation = totalDebtCalculation / loanTerm;
    setMonthlyPayment(monthlyPaymentCalculation);

    const aprCalculation =
      ((totalDebtCalculation - loanAmount) / loanAmount / (loanTerm * 30.4)) * 365 * 100;
    setApr(parseFloat(aprCalculation.toFixed(2)));
  }, [loanAmount, loanTerm, MOCK_DATA.interestRate, MOCK_DATA.bankFee]);

  return (
    <div
      className={`component loan-calculator ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="loan-calculator-input-group">
        <div className="row justify-content-between">
          <div className="col-auto">
            <label htmlFor="loan-amount">Amount</label>
          </div>
          <div className="col-auto">
            <div className="loan-calculator-input-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
              </svg>
              <input
                type="number"
                id="loan-amount"
                name="loan-amount"
                min={MOCK_DATA.minAmount}
                max={MOCK_DATA.maxAmount}
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              />
              <span className="fw-bold">{MOCK_DATA.currency}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="loan-calculator-range-wrapper">
              <input
                type="range"
                id="loan-amount-range"
                name="loan-amount-range"
                min={MOCK_DATA.minAmount}
                max={MOCK_DATA.maxAmount}
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                style={{
                  backgroundSize: `${
                    ((loanAmount - MOCK_DATA.minAmount) * 100) /
                    (MOCK_DATA.maxAmount - MOCK_DATA.minAmount)
                  }% 100%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <span>
              {MOCK_DATA.minAmount} {MOCK_DATA.currency}
            </span>
          </div>
          <div className="col-auto">
            <span>
              {MOCK_DATA.maxAmount} {MOCK_DATA.currency}
            </span>
          </div>
        </div>
      </div>

      <div className="loan-calculator-input-group">
        <div className="row justify-content-between">
          <div className="col-auto">
            <label htmlFor="loan-amount">Term of repayment</label>
          </div>
          <div className="col-auto">
            <div className="loan-calculator-input-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z" />
              </svg>
              <input
                type="number"
                id="loan-term"
                name="loan-term"
                min={MOCK_DATA.minTerm}
                max={MOCK_DATA.maxTerm}
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              />
              <span className="fw-bold">{MOCK_DATA.termType}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="loan-calculator-range-wrapper">
              <input
                type="range"
                id="loan-term-range"
                name="loan-term-range"
                min={MOCK_DATA.minTerm}
                max={MOCK_DATA.maxTerm}
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                style={{
                  backgroundSize: `${
                    ((loanTerm - MOCK_DATA.minTerm) * 100) / (MOCK_DATA.maxTerm - MOCK_DATA.minTerm)
                  }% 100%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <span>
              {MOCK_DATA.minTerm} {MOCK_DATA.termType}
            </span>
          </div>
          <div className="col-auto">
            <span>
              {MOCK_DATA.maxTerm} {MOCK_DATA.termType}
            </span>
          </div>
        </div>
      </div>

      <div className="loan-calculator-results">
        <div className="loan-calculator-monthly-payment">
          <ResultLine
            left="Monthly payment"
            right={`${monthlyPayment.toFixed(2)} ${MOCK_DATA.currency}`}
          />
        </div>
        <ResultLine left="Interest rate" right={`${MOCK_DATA.interestRate}%`} />
        <ResultLine left="Bank package fee" right={`${MOCK_DATA.bankFee} ${MOCK_DATA.currency}`} />
        <ResultLine left="APR%" right={`${apr}%`} />
        <ResultLine left="Total debt" right={`${totalDebt.toFixed(2)} ${MOCK_DATA.currency}`} />
      </div>
    </div>
  );
};
