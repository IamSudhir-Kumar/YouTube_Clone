import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constant';
import { BedTwoTone, Category } from '@mui/icons-material';

const Sidebar = ({ selectedCategory , setSelectedCategory}) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { xs: 'auto', md: '92%' }, 
                flexDirection: { md: 'column' },
                padding: { xs: 0, md: 2 },
                border: { md: '2px solid #3d3d3d' },
                borderRadius: { md: '10px' },
                backgroundColor: '#505050',
            }}
        >
            {categories.map((category, index) => (
                <button
                    className='category-btn'
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && '#FC1503',
                        color: 'white',
                        fontSize: '16px',
                    }}
                    key={category.name}
                >
                    <span style={{
                        color: category.name === selectedCategory ? 'white' :
                            'black', marginRight: '15px',padding:'2px', fontSize: '16px'
                    }}>
                        {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Sidebar;
