import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Grid, IconButton} from "@mui/material";
import CloseIcon  from "@mui/icons-material/Close";
import Sort from "../Sort/Sort";
import { useNavigate } from "react-router-dom";
import { Button, Dialog } from "@mui/material";
import "./Header.css";
import AddProduct from "../AddProduct/AddProduct";

export default function Header({
  sortBy,
  handleSortByChange,
  onPage,
  handleAdd,
  handleCancel,
  products,
  performApi,
  isUploadFormVisible,
  open
}) {
  const navigate = useNavigate();
  return (
    <>
      <Dialog 
      open={isUploadFormVisible}
      onClose={handleCancel}
      className='dialog'>
        <Grid container>
          <Grid item xs={10}>
            <h3>Add</h3>
            </Grid>
          <Grid item xs={2}>
          <IconButton onClick={handleCancel}>
            <CloseIcon />
          </IconButton>
          </Grid>
          <Grid item xs={12}>
            <AddProduct
            products={products}
            performApi={performApi}
            handleCancel={handleCancel}
             />
          </Grid>
        </Grid>
      </Dialog>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ paddingTop: "15px", paddingLeft: "15px", paddingRight: "15px" }}
        >
          <Grid item xs={6} md={6}>
            <h2>QKart</h2>
          </Grid>
          {onPage === "home" ? (
            <Grid item xs={6} md={6} className="grid-items">
              <div>
                <Sort sortBy={sortBy} handleSortByChange={handleSortByChange} />
              </div>
              <Button variant="contained" onClick={handleAdd}>
                Add
              </Button>
            </Grid>
          ) : (
            <Button
              sx={{ marginTop: "15px" }}
              variant="contained"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          )}
        </Grid>
      </Box>
    </>
  );
}
