import { useState } from "react";
import styled from 'styled-components';

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
   padding: 5px 0; 
   background: ${props => props.active ? 'blue' : null}
`

interface ListItemProps {
    active: boolean;
}
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // let items = [
    //     'New York',
    //     'San Francisco',
    //     'Tokyo',
    //     'London',
    //     'Paris'
    // ]; 

    // items = [];

    const [selectedIndex, setSelectedIndex] = useState(0);
    

    return (
        <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No item found.</p>}        
    <List className="list-group">
        {items.map((item, index) => 
        <ListItem active= { selectedIndex === index }
        key={item} 
        onClick= {() => {
            setSelectedIndex(index);
            onSelectItem(item);
        }}
        >{item}
        </ListItem>
    )}    
    </List>
    </>
  );
}

export default ListGroup;