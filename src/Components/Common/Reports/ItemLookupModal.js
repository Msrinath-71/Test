import React,{ useState }  from 'react';
import SearchIcon from '@material-ui/icons/Search';
import items from './ItemTemplate';
import {
    Button,
    Modal,
    InputGroup,
    FormControl,
    ListGroup
    
  } from 'react-bootstrap';

function ItemLookupModal(props) {
    const { show, selectedValue, modalOnClose } = props;
    const [searchResult, setSearchResult] = useState(items);
  
    const handleListItemClick = value => {
      modalOnClose(value);
      // Timeout, for smooth transition back to initiator screen
      setTimeout(() => setSearchResult(items), 200);
    };
  
    const DynamicSearchResultList = () => {
      return searchResult.map(item => (
        <ListGroup.Item
          key={item.id}
          action
          onClick={() => handleListItemClick(item.id + ', ' + item.name)}
        >
          {item.id + ' / ' + item.name}
        </ListGroup.Item>
      ));
    };
  
    const handleValueChange = e => {
      const newItems = items.filter(item =>
        Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(e.target.value.toLowerCase())
      );
      setSearchResult(newItems);
    };
  
    const modalBody = () => {
      return (
        <>
          <div className="searchInLookup ">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search..."
                onChange={handleValueChange}
                aria-label="Search..."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="outline-primary">
                  <SearchIcon />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <ListGroup>
            <DynamicSearchResultList />
          </ListGroup>
        </>
      );
    };
    return (
      <Modal
        size="lg"
        show={show}
        onHide={() => {
          modalOnClose(selectedValue);
        }}
        scrollable={true}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Please select a product.
          </Modal.Title>
          <Button
            variant="primary"
            onClick={() => {
              modalOnClose('');
            }}
          >
            All Items
          </Button>
        </Modal.Header>
        <Modal.Body>{modalBody()}</Modal.Body>
      </Modal>
    );
  }
  export default ItemLookupModal;