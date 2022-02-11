import React from "react";

import { button, layout, icon, text, card, chip } from "../shared/material";

const Card = (props) => {
  return (
    <card.Card>
      <card.CardContent>
        <text.Typography component="div" variant="h6" color="primary">
          Title
        </text.Typography>

        <div className="cardContents">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </div>
      </card.CardContent>
      <card.CardActions>
        <chip.Chip size="small" label="javascript" variant="outlined" />
        <chip.Chip size="small" label="java" variant="outlined" />
        <chip.Chip size="small" label="python" variant="outlined" />
      </card.CardActions>
    </card.Card>
  );
};

export default Card;
