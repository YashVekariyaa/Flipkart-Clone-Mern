import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'

import { InputBase, Box, List, ListItem, styled } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
      background-color: #fff;
      border-radius: 2px;
      width: 580px;
      margin-left: 10px;
      display: flex;  
`;


const InputSearchBase = styled(InputBase)`
      padding-left: 20px;
      width: 100%;
      font-size: unset; 
`;

const SearchIconWrapper = styled(Box)`
      margin-left: auto;
      color: blue;
      padding: 5px;
      display: flex;
`;

const ListWrapper = styled(List)`
      position: absolute;
      background: #FFFFFF;
      color: #000;
      margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState('');

  const { products } = useSelector(state => state.getProducts)
  const dispatch = useDispatch();


  useEffect(() => {
      dispatch(getProducts)
  }, [dispatch])
  

  const getText = (text) => {
      setText(text);
  }

  return (
    <div>
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                onChange={(e) => getText(e.target.value)}
                value={text}
            />
            <SearchIconWrapper >
                <SearchIcon />
            </SearchIconWrapper>
        {
          text && 
                <ListWrapper>
                   {
                     products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem>
                            <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{ textDecoration: 'none', color: 'inherit' }} >
                                {product.title.longTitle}
                            </Link>
                        </ListItem>
                     ))
                   }
                </ListWrapper>
        }
          </SearchContainer>
    </div>
  )
}

export default Search
