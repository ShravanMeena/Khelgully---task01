import React from "react";

// material-ui components
import { Grid } from "@material-ui/core";

// components
import SelectPlayers from "./components/SelectPlayers";
import SelectTeam from "./components/SelectTeam";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonComponent from "./components/ButtonComponent";

// css
import "./styles/_app.scss";

export default function App() {
  return (
    <>
      {/* header */}
      <Header />

      {/* main content  */}
      <main className='mainContainer'>
        <div className='mainBox'>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <p>Select Team</p>
            </Grid>

            <Grid item xs={8}>
              <SelectTeam />
            </Grid>

            <Grid item xs={4}>
              <p>Select Players</p>
            </Grid>

            <Grid item xs={8}>
              <SelectPlayers />
            </Grid>
          </Grid>

          <ButtonComponent title='Pay & Register' />
        </div>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
}
