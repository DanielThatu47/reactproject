import React, { useState } from 'react';
import {
  Container,
  Box,
  Text,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
 
  RadioGroup,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FormControlLabel, Radio as MuiRadio } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Grooming' } };
const hehe = { inputProps: { 'aria-label': 'Training' } };
const what = { inputProps: { 'aria-label': 'Daycare' } };

const Booking = () => {
  const containerStyles = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const headerStyles = {
    fontSize: '2xl',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const inputStyles = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    width: '100%',
    marginBottom: '15px',
    fontSize: 'lg',
  };

  const checkboxStyles = {
    marginBottom: '10px',
  };

  const radioGroupStyles = {
    marginBottom: '20px',
  };

  const datePickerStyles = {
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    fontSize: 'lg',
  };

  const buttonStyles = {
    backgroundColor: '#4285F4',
    color: 'white',
    fontSize: 'lg',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.2s',
  };

  const [gender, setGender] = useState('female');

  return (
    <Container style={containerStyles}>
      <Box>
        <Text style={headerStyles}>Booking Form</Text>
        <Box as="form">
          <Input
            type="text"
            placeholder="First Name"
            style={inputStyles}
          />
          <Input
            type="text"
            placeholder="Last Name"
            style={inputStyles}
          />
          <Input
            type="text"
            placeholder="Address"
            style={inputStyles}
          />
          <Input
            type="text"
            placeholder="Phone Number"
            style={inputStyles}
          />
        </Box>

        <Box style={checkboxStyles}>
          <Checkbox {...label}>Grooming</Checkbox>
          <Checkbox {...hehe}>Training</Checkbox>
          <Checkbox {...what}>Daycare</Checkbox>
        </Box>
        <FormControl style={radioGroupStyles}>
          <FormLabel>Gender</FormLabel>
          <RadioGroup defaultValue="female" name="radio-buttons-group">
            <Stack direction="row">
              <FormControlLabel
                value="female"
                control={<MuiRadio />}
                label="Female"
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              <FormControlLabel
                value="male"
                control={<MuiRadio />}
                label="Male"
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
            </Stack>
          </RadioGroup>
        </FormControl>

        <FormControl style={inputStyles}>
          <FormLabel>Date of Birth</FormLabel>
          <DatePicker
            selected={new Date()}
            onChange={(date) => console.log(date)}
            dateFormat="MM/dd/yyyy"
            style={datePickerStyles}
          />
        </FormControl>

        <Input
          type="text"
          placeholder="Type of Pet"
          style={inputStyles}
        />
        <Input
          type="text"
          placeholder="Any special requirement"
          style={inputStyles}
        />

        <Button
          style={buttonStyles}
          onClick={() => console.log('Form submitted')}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Booking;
