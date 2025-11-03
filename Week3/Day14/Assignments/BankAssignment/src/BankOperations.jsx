import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './bankSlice';

const BankOperations = () => {
  const [amount, setAmount] = useState('');
  const balance = useSelector((state) => state.bank.balance);
  const dispatch = useDispatch();

  const onDeposit = () => {
    const val = Number(amount);
    if (!val || val <= 0) {
      alert('Enter a positive amount to deposit.');
      return;
    }
    dispatch(deposit(val));
    setAmount('');
  };

  const onWithdraw = () => {
    const val = Number(amount);
    if (!val || val <= 0) {
      alert('Enter a positive amount to withdraw.');
      return;
    }
    dispatch(withdraw(val));
    setAmount('');
  };

  return (
    <div style={styles.container}>
      <h2>🏦 Simple Banking App</h2>
      <h3>Current Balance: ₹{balance}</h3>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />

      <div>
        <button onClick={onDeposit} style={{ ...styles.button, marginRight: 8 }}>
          Deposit
        </button>
        <button onClick={onWithdraw} style={styles.button}>
          Withdraw
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '80px',
    backgroundColor: '#f8f9fa',
    padding: '28px',
    borderRadius: '10px',
    width: '380px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
  },
  input: {
    padding: '10px',
    width: '72%',
    marginBottom: '12px',
    fontSize: '15px',
  },
  button: {
    padding: '10px 18px',
    fontSize: '15px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: 'white',
  },
};

export default BankOperations;