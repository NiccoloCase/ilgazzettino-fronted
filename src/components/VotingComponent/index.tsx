import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./VotingComponent.scss";

const VotingComponent: React.FC = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlayer(event.target.value);
  };

  const handleVote = () => {
    if (selectedPlayer) {
      enqueueSnackbar("Voto registrato", { variant: "success" });
    } else {
      enqueueSnackbar("Perfavore seleziona un giocatore");
    }
  };

  return (
    <Container className="my-2 VotingComponent py-1">
      <p id="poll-title">
        Sondaggio: Umana Reyer-Trieste - Chi è il miglior giocatore orogranata
        della partita? VOTATE
      </p>
      <Form aria-labelledby="poll-title">
        <fieldset>
          <legend className="visually-hidden">Seleziona un giocatore</legend>
          {[
            "00 Tessitori",
            "2 McGruder",
            "7 Casarin",
            "9 Moretti",
            "11 Ennis",
            "14 Janelidze",
            "21 Kabengele",
            "22 Parks",
            "24 Wheatle",
            "25 Simms",
            "33 Wiltjer",
            "40 Iannuzzi",
          ].map((player) => (
            <Form.Check
              key={player}
              type="radio"
              name="player"
              label={player}
              value={player}
              checked={selectedPlayer === player}
              onChange={handleChange}
              id={`radio-${player.replace(/\s+/g, "")}`}
            />
          ))}
        </fieldset>
        <Button
          onClick={handleVote}
          className="mt-3 vote-btn"
          aria-label="Invia il tuo voto"
        >
          <small>VOTA</small>
        </Button>
        <Button
          className="mt-3 results-btn"
          aria-label="Visualizza i risultati del sondaggio"
        >
          <small>RISULTATI</small>
        </Button>
      </Form>
    </Container>
  );
};

export default VotingComponent;
