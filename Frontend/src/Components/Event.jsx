import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaCalendarAlt, FaMapMarkerAlt, FaRegNewspaper, FaLink } from 'react-icons/fa';
import './Event.css'; // Import custom CSS for additional styling

function Event() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    gmeetLink: '',
    eventType: 'Technical',
  });
  const [showTechnicalEvents, setShowTechnicalEvents] = useState(false);
  const [showNonTechnicalEvents, setShowNonTechnicalEvents] = useState(false);
  const [technicalEvents, setTechnicalEvents] = useState([
    {
      _id: '1',
      title: 'Introduction to React',
      date: '2024-09-20',
      location: 'Online',
      description: 'A beginner’s guide to React, including its concepts and how to build components.',
      gmeetLink: 'https://meet.google.com/gyv-imop-zgn',
    },
    // More technical events
  ]);
  const [nonTechnicalEvents, setNonTechnicalEvents] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.eventType === 'Technical') {
      setTechnicalEvents([...technicalEvents, { ...formData, _id: Date.now().toString() }]);
    } else {
      setNonTechnicalEvents([...nonTechnicalEvents, { ...formData, _id: Date.now().toString() }]);
    }
    setFormData({
      title: '',
      date: '',
      location: '',
      description: '',
      gmeetLink: '',
      eventType: 'Technical',
    });
    setShowSuccess(true);
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Create an Event</h1>

      <Form onSubmit={handleSubmit} className="mb-5 p-4 bg-light shadow-lg rounded">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter event location"
            required
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter event description"
            required
          />
        </Form.Group>
        <Form.Group controlId="formGmeetLink">
          <Form.Label>Google Meet Link</Form.Label>
          <Form.Control
            type="text"
            name="gmeetLink"
            value={formData.gmeetLink}
            onChange={handleChange}
            placeholder="Enter Google Meet link (optional)"
          />
        </Form.Group>
        <Form.Group controlId="formEventType">
          <Form.Label>Event Type</Form.Label>
          <Form.Control
            as="select"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="Technical">Technical</option>
            <option value="Non-Technical">Non-Technical</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3 w-100">
          Submit
        </Button>
      </Form>

      {showSuccess && (
        <Alert variant="success" className="text-center success-popup">
          Event created successfully!
        </Alert>
      )}

      <div className="d-flex justify-content-between mb-4">
      <Button
  onClick={() => setShowTechnicalEvents(!showTechnicalEvents)}
  className="btn-toggle btn-show"
>
  {showTechnicalEvents ? 'Hide Technical Events' : 'Show Technical Events'}
</Button>

<Button
  onClick={() => setShowNonTechnicalEvents(!showNonTechnicalEvents)}
  className="btn-toggle btn-hide"
>
  {showNonTechnicalEvents ? 'Hide Non-Technical Events' : 'Show Non-Technical Events'}
</Button>

      </div>

      {showTechnicalEvents && (
        <>
          <h2 className="text-center mb-4">Technical Events</h2>
          <Row>
            {technicalEvents.map((event) => (
              <Col md={4} key={event._id} className="mb-4">
                <Card className="border-light shadow-sm rounded event-card">
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center">
                      <FaRegNewspaper className="me-2 text-primary" />
                      {event.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
                      <FaCalendarAlt className="me-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </Card.Subtitle>
                    <Card.Text className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-2 text-success" />
                      <strong>Location:</strong> {event.location}
                    </Card.Text>
                    <Card.Text>
                      <strong>Description:</strong> {event.description}
                    </Card.Text>
                    {event.gmeetLink && (
                      <a
                        href={event.gmeetLink}
                        className="btn btn-outline-primary w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink className="me-2" />
                        Join Event
                      </a>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      {showNonTechnicalEvents && (
        <>
          <h2 className="text-center mb-4">Non-Technical Events</h2>
          <Row>
            {nonTechnicalEvents.map((event) => (
              <Col md={4} key={event._id} className="mb-4">
                <Card className="border-light shadow-sm rounded event-card">
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center">
                      <FaRegNewspaper className="me-2 text-primary" />
                      {event.title}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted d-flex align-items-center">
                      <FaCalendarAlt className="me-2" />
                      {new Date(event.date).toLocaleDateString()}
                    </Card.Subtitle>
                    <Card.Text className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-2 text-success" />
                      <strong>Location:</strong> {event.location}
                    </Card.Text>
                    <Card.Text>
                      <strong>Description:</strong> {event.description}
                    </Card.Text>
                    {event.gmeetLink && (
                      <a
                        href={event.gmeetLink}
                        className="btn btn-outline-primary w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLink className="me-2" />
                        Join Event
                      </a>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
}

export default Event;

