// color
// 찐한 배경색 : rgb(10,25,41);
// 테두리 : #E7EBF0;

// Text
// variant : 텍스트의 크기 지정 h1, h2, h3 ..
// color : color	'inherit'  primary secondary success error info warning string
// align : 수평 정렬. left, center, right
import { Typography } from "@mui/material";

// button
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

// layout
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
// direction row, spacing={num}

// card
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

// icon
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TagIcon from '@mui/icons-material/Tag';

// chip
import Chip from "@mui/material/Chip";

const text = {
  Typography,
};

const button = {
  Button,
  ButtonGroup,
};

const layout = {
  Box,
  Container,
  CssBaseline,
  Stack,
};

const card = {
  Card,
  CardActions,
  CardContent,
};

const icon = {
  LoginIcon,
  LogoutIcon,
  GroupAddIcon,
  FavoriteIcon,
  FavoriteBorderIcon,
  TagIcon,
};

const chip = {
  Chip,
};

export { layout, button, icon, text, card, chip };
