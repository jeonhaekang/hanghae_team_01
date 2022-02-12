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
import TagIcon from "@mui/icons-material/Tag";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { DiJava, DiJsBadge, DiPython, DiCss3, DiHtml5 } from "react-icons/di";

// textfiled
import { TextField } from "@mui/material";

// chip
import Chip from "@mui/material/Chip";

// select
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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
  TagIcon,
  ErrorOutlineIcon,
  DiJava,
  DiJsBadge,
  DiPython,
  DiCss3,
  DiHtml5,
};

const textfiled = {
  TextField,
};

const chip = {
  Chip,
};

const select = {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
};

export { layout, button, icon, text, card, chip, textfiled, select };
