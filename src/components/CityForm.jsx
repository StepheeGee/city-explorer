/* eslint-disable react/prop-types */
import { useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CityForm(props) {
  const [showHeading, setShowHeading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowHeading(true);
    props.handleGetLocation();
  };
  return (
    <Form onSubmit={handleSubmit} >
      
      <div className="search-group">
        <Form.Group >
          
          <Form.Control
            placeholder="Enter a City"
            size="lg"
            type="text"
            onChange={props.updateCity}
            className="search-input"
          />
          </Form.Group>
          <Form.Group >
          <Button  type="submit" className="search-button">
            Explore
          </Button>
        </Form.Group>
        
      </div>
      {showHeading && props.city &&  (
        <h2 className="results-text">Map of {props.city}</h2>
      )}
    
    </Form>
  );
}

export default CityForm;