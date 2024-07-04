import React, { useState, useEffect, ReactNode } from 'react';
import { Field, Text } from '@sitecore-jss/sitecore-jss-nextjs';
import { useI18n } from 'next-localization';

interface Fields {
  BankFee: Field<number>;
  Currency: Field<string>;
  InterestRate: Field<number>;
  MaxAmount: Field<number>;
  MaxTerm: Field<number>;
  MinAmount: Field<number>;
  MinTerm: Field<number>;
  TermName: Field<string>;
}

export type LoanCalculatorProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ResultLine = ({ left, right }: { left: ReactNode; right: ReactNode }) => {
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
  const { t } = useI18n();

  const [loanAmount, setLoanAmount] = useState(
    Math.round((props.fields.MinAmount.value + props.fields.MaxAmount.value) / 2)
  );
  const [loanTerm, setLoanTerm] = useState(
    Math.round((props.fields.MinTerm.value + props.fields.MaxTerm.value) / 2)
  );
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalDebt, setTotalDebt] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    const monthlyInterestRate = props.fields.InterestRate.value / 100 / 12;

    const monthlyPaymentCalculation =
      (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));
    setMonthlyPayment(monthlyPaymentCalculation);

    const totalDebtCalculation = monthlyPaymentCalculation * loanTerm + props.fields.BankFee.value;
    setTotalDebt(totalDebtCalculation);

    const totalInterestCalculation = totalDebtCalculation - loanAmount - props.fields.BankFee.value;
    setTotalInterest(parseFloat(totalInterestCalculation.toFixed(2)));
  }, [loanAmount, loanTerm, props.fields.InterestRate.value, props.fields.BankFee.value]);

  return (
    <div
      className={`component loan-calculator ${props.params.styles.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="loan-calculator-input-group">
        <div className="row justify-content-between">
          <div className="col-auto">
            <label htmlFor="loan-amount">{t('Amount') || 'Amount'}</label>
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
                min={props.fields.MinAmount.value}
                max={props.fields.MaxAmount.value}
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
              />
              <span className="fw-bold">
                <Text field={props.fields.Currency} />
              </span>
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
                min={props.fields.MinAmount.value}
                max={props.fields.MaxAmount.value}
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                style={{
                  backgroundSize: `${
                    loanAmount < props.fields.MinAmount.value
                      ? '0'
                      : loanAmount > props.fields.MaxAmount.value
                      ? '100'
                      : ((loanAmount - props.fields.MinAmount.value) * 100) /
                        (props.fields.MaxAmount.value - props.fields.MinAmount.value)
                  }% 100%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <span>
              <Text field={props.fields.MinAmount} /> <Text field={props.fields.Currency} />
            </span>
          </div>
          <div className="col-auto">
            <span>
              <Text field={props.fields.MaxAmount} /> <Text field={props.fields.Currency} />
            </span>
          </div>
        </div>
      </div>

      <div className="loan-calculator-input-group">
        <div className="row justify-content-between">
          <div className="col-auto">
            <label htmlFor="loan-amount">{t('Term of repayment') || 'Term of repayment'}</label>
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
                min={props.fields.MinTerm.value}
                max={props.fields.MaxTerm.value}
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
              />
              <span className="fw-bold">
                <Text field={props.fields.TermName} />
              </span>
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
                min={props.fields.MinTerm.value}
                max={props.fields.MaxTerm.value}
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                style={{
                  backgroundSize: `${
                    loanTerm < props.fields.MinTerm.value
                      ? '0'
                      : loanTerm > props.fields.MaxTerm.value
                      ? '100'
                      : ((loanTerm - props.fields.MinTerm.value) * 100) /
                        (props.fields.MaxTerm.value - props.fields.MinTerm.value)
                  }% 100%`,
                }}
              />
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-auto">
            <span>
              <Text field={props.fields.MinTerm} /> <Text field={props.fields.TermName} />
            </span>
          </div>
          <div className="col-auto">
            <span>
              <Text field={props.fields.MaxTerm} /> <Text field={props.fields.TermName} />
            </span>
          </div>
        </div>
      </div>

      <div className="loan-calculator-results">
        <div className="loan-calculator-monthly-payment">
          <ResultLine
            left={t('Monthly payment') || 'Monthly payment'}
            right={
              <>
                {monthlyPayment.toFixed(2)} <Text field={props.fields.Currency} />
              </>
            }
          />
        </div>
        <ResultLine
          left={t('Interest rate') || 'Interest rate'}
          right={
            <>
              <Text field={props.fields.InterestRate} />%
            </>
          }
        />
        <ResultLine
          left={t('Bank package fee') || 'Bank package fee'}
          right={
            <>
              <Text field={props.fields.BankFee} /> <Text field={props.fields.Currency} />
            </>
          }
        />
        <ResultLine
          left={t('Total interest') || 'Total interest'}
          right={
            <>
              {totalInterest.toFixed(2)} <Text field={props.fields.Currency} />
            </>
          }
        />
        <ResultLine
          left={t('Total debt') || 'Total debt'}
          right={
            <>
              {totalDebt.toFixed(2)} <Text field={props.fields.Currency} />
            </>
          }
        />
      </div>
    </div>
  );
};
