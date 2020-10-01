import React from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';

import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';

import calculateAge from '../lib/calculateAge';

const Application = () => {
    const [name, onNameInput] = React.useState('');
    const [dob, onDobInput] = React.useState('');
    const [doorNumber, onDoorNumberInput] = React.useState('');
    const [postcode, onPostCodeInput] = React.useState('');
    const [annualIncome, onAnnualIncomeInput] = React.useState('');
    const [employmentStatus, onEmploymentStatusInput] = React.useState('');
    const [fieldsIncompleteMessage, setFieldsIncompleteMessage] = React.useState('');
    const history = useHistory();

    const handleSubmit = () => {
        setFieldsIncompleteMessage('');
        const data = {
            name,
            dob,
            doorNumber,
            postcode,
            annualIncome,
            employmentStatus
        };
        const fieldsComplete = [];
        if (dob) {
            data.age = calculateAge(dob);
        }
        const userData = Object.entries(data);
        userData.forEach(item => {
            if (item[1].length < 1) {
                setFieldsIncompleteMessage('You must complete all fields');
            } else {
                fieldsComplete.push(1);
            }
        });
        if (fieldsComplete.length === userData.length) {
            axios.get('http://localhost:4000/', {
                params: {
                    userEntries: data
                  }
            })
              .then(res => {
                history.push('/show-results', {
                    cards: res.data
                });
              })
              .catch(error => {
                console.log(error);
              });
        };
    }

    return (
        <main>
            <div>
                <div>
                   <h1>Application</h1> 
                </div>
                <div>
                    <FormInput labelName="Name" handleChange={(e) => onNameInput(e.target.value)} />
                    <FormInput type="date" labelName="Date of birth" handleChange={(e) => onDobInput(e.target.value)} />
                    <FormInput labelName="Door Number" handleChange={(e) => onDoorNumberInput(e.target.value)} />
                    <FormInput labelName="Postcode" handleChange={(e) => onPostCodeInput(e.target.value)} />
                    <FormSelect 
                        labelName="Employment Status" 
                        handleChange={(e) => onEmploymentStatusInput(e.target.value)}
                        options={['Full Time', 'Part Time', 'Contract', 'Student', 'Unemployed']}
                    />
                    <FormInput type="number" labelName="Annual Income" handleChange={(e) => onAnnualIncomeInput(e.target.value)} />
                    <div className="message">{fieldsIncompleteMessage}</div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </main>
    );
}

export default Application;