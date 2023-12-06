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
    <Form onSubmit={handleSubmit} className="google-search-form">
      <p className="instructions">Enter a city below.</p>
      <div className="google-search-container">
        <Form.Group className="search-group">
          
          <Form.Control
            placeholder="Oh...the places you'll go."
            size="lg"
            type="text"
         
            onChange={props.updateCity}
            className="search-input"
          />
          <Button variant="primary" type="submit" className="search-button">
            Explore
          </Button>
        </Form.Group>
      </div>
      {showHeading && props.city &&  (
        <h2 className="results-text">Welcome to {props.city}. <br/> Explore Below!</h2>
      )}
    
    </Form>
  );
}

export default CityForm;