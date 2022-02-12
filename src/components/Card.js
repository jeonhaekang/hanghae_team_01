import React from "react";

import { button, layout, icon, text, card, chip } from "../shared/material";
import Divider from "@mui/material/Divider";

const Card = (props) => {
  return (
    <card.Card>
      <card.CardContent
        sx={{
          position: "relative",
          borderBottom: "1px solid #E7EBF0",
        }}
      >
        <text.Typography
          sx={{
            whiteSpace: "nowrap",
            width: "700px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          component="div"
          variant="h6"
          color="primary"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
          maximus sapien. Proin aliquam dignissim orci eget placerat. Aliquam
          vestibulum molestie tellus
        </text.Typography>
        <layout.Box
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
        >
          <layout.Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <text.Typography color="primary">username</text.Typography>
            <layout.Stack direction="row">
              <icon.FavoriteIcon color="error" />
              <text.Typography component="h7">17</text.Typography>
            </layout.Stack>
          </layout.Stack>
        </layout.Box>
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
      <card.CardContent>
        <layout.Stack direction="row" spacing={1}>
          <icon.TagIcon color="info"></icon.TagIcon>
          <chip.Chip size="small" label="javascript" />
          <chip.Chip size="small" label="java" />
          <chip.Chip size="small" label="python" />
        </layout.Stack>
      </card.CardContent>
    </card.Card>
  );
};

export default Card;
