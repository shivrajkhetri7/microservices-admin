import React, { useState } from 'react';
import { Grid, Button, TextField, FormControlLabel, Checkbox, Link, Box, Typography, Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FileUploadAndDrag from "./fileUploadAndDrag";

const AddExpesne = () => {
    const [categories, setCategories] = useState<string>('')

    const handleChange = (event: SelectChangeEvent) => {
        setCategories(event.target.value as string);
    };

    const addExpenses = () => {

    }

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                {/* Upload In invioce  */}
                <Grid xs={6}>
                    <Box component="main" sx={{
                        "flexGrow": 1,
                        "p": 3,
                        "opacity": 1,
                        "background": "rgb(248, 249, 250)",
                        "color": "rgb(52, 71, 103)",
                        "border-radius": "0.75rem",
                        "box-shadow": "none"
                    }}>
                        <InputLabel id="demo-simple-select-label" sx={{ width: "100%", mt: 2, mb: 2 }}>Upload Invoice / bill </InputLabel>
                        <FileUploadAndDrag />
                    </Box>
                    <Box component="main" sx={{
                        "flexGrow": 1,
                        "p": 3,
                        "mt":3,
                        "opacity": 1,
                        "background": "rgb(248, 249, 250)",
                        "color": "rgb(52, 71, 103)",
                        "border-radius": "0.75rem",
                        "box-shadow": "none"
                    }}>
                        <InputLabel id="demo-simple-select-label" sx={{ width: "100%", mt: 2, mb: 2 }}>Todays Expense</InputLabel>
                        
                    </Box>
                </Grid>
                {/*  Add expense */}
                <Grid xs={6} sx={{
                    "display":"flex",
                    "justifyContent": "center",
                    "minHeight": "100vh"
                }}>
                    <Box component="form" onSubmit={addExpenses} noValidate sx={{
                        "p": 3,
                        "width": "50%"
                    }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="amount"
                            label="Amount"
                            name="amount"
                            autoComplete="amount"
                            autoFocus
                        />
                        <InputLabel id="demo-simple-select-label" sx={{ width: "100%" }}>Expense Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categories}
                            label="Expense Type"
                            onChange={handleChange}
                            sx={{ width: "100%" }}
                        >
                            <MenuItem value={10}>Cash</MenuItem>
                            <MenuItem value={20}>Cheque</MenuItem>
                            <MenuItem value={20}>Debit Card</MenuItem>
                            <MenuItem value={20}>Credit Card</MenuItem>
                            <MenuItem value={30}>UPI / Net banking / Online Banking </MenuItem>
                        </Select>
                        <InputLabel id="demo-simple-select-label" sx={{ width: "100%", mt: 1 }}>Categoty</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={categories}
                            label="Categoty"
                            onChange={handleChange}
                            sx={{ width: "100%" }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Add To List
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default AddExpesne;