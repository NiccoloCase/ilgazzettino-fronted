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
      <h6>
        Sondaggio: Umana Reyer-Trieste Chi è il miglior giocatore orogranata
        della partita? VOTATE
      </h6>
      <Form>
        <Form.Check
          type="radio"
          label="00 Tessitori"
          value="00 Tessitori"
          checked={selectedPlayer === "00 Tessitori"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="2 McGruder"
          value="2 McGruder"
          checked={selectedPlayer === "2 McGruder"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="7 Casarin"
          value="7 Casarin"
          checked={selectedPlayer === "7 Casarin"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="9 Moretti"
          value="9 Moretti"
          checked={selectedPlayer === "9 Moretti"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="11 Ennis"
          value="11 Ennis"
          checked={selectedPlayer === "11 Ennis"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="14 Janelidze"
          value="14 Janelidze"
          checked={selectedPlayer === "14 Janelidze"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="21 Kabengele"
          value="21 Kabengele"
          checked={selectedPlayer === "21 Kabengele"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="22 Parks"
          value="22 Parks"
          checked={selectedPlayer === "22 Parks"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="24 Wheatle"
          value="24 Wheatle"
          checked={selectedPlayer === "24 Wheatle"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="25 Simms"
          value="25 Simms"
          checked={selectedPlayer === "25 Simms"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="33 Wiltjer"
          value="33 Wiltjer"
          checked={selectedPlayer === "33 Wiltjer"}
          onChange={handleChange}
        />
        <Form.Check
          type="radio"
          label="40 Iannuzzi"
          value="40 Iannuzzi"
          checked={selectedPlayer === "40 Iannuzzi"}
          onChange={handleChange}
        />
        <Button onClick={handleVote} className="mt-3 vote-btn">
          <small>VOTA</small>
        </Button>
        <Button className="mt-3 results-btn">
          <small>RISULTATI</small>
        </Button>
      </Form>
    </Container>
  );
};

export default VotingComponent;
