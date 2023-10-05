import { Box, FormControl, MenuItem } from '@mui/material';
import Select from "@mui/material/Select";
import React from 'react'

const Sort = ({sortBy, handleSortByChange}) => {
    const options = ['Low to High','High to Low'];
  return (
    <div>
      <Box sx={{minWidth: 120}}>
        <FormControl sx={{width:'200px', size:'small'}}>
            <Select 
            label="SortBy:"
            value={sortBy}
            onChange={handleSortByChange}>
                {
                    options.map((option, index) => (
                        <MenuItem key={index} value={option}>
                        {option}
                        </MenuItem>
                    ))
                }

            </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Sort

