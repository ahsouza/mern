import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function PaymentForm() {
  const [quartos, setQuartos] = React.useState('0');
  const [banheiros, setBanheiros] = React.useState('0');
  const [salas, setSalas] = React.useState('0');
  const [vagas, setVagas] = React.useState('0');
  
  const handleChangeQuartos = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuartos(event.target.value as string);
  };
  const handleChangeBanheiros = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBanheiros(event.target.value as string);
  };
  const handleChangeSalas = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSalas(event.target.value as string);
  };
  const handleChangeVagas = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVagas(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Conte um pouco mais do imóvel...
      </Typography>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="nome"
            label="Nome"
            fullWidth
            autoComplete="Apartamento..."
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}

          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="descricao"
            label="Descrição"
            fullWidth
            autoComplete="Apartamento na Praia de Jacaraípe"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="metro_cubico"
            label="M³"
            type="number"
            fullWidth
            autoComplete="1,65"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3} md={6}>
          <FormControl fullWidth>
            <InputLabel id="quartos">Quartos</InputLabel>
            <Select
              labelId="quartos"
              id="quartos"
              value={quartos}
              onChange={handleChangeQuartos}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="mais">mais</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} md={6}>
          <FormControl fullWidth>
            <InputLabel id="banheiros">Banheiros</InputLabel>
            <Select
              labelId="banheiros"
              id="banheiros"
              value={banheiros}
              onChange={handleChangeBanheiros}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="mais">mais</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} md={6}>
          <FormControl fullWidth>
            <InputLabel id="salas">Salas</InputLabel>
            <Select
              labelId="salas"
              id="salas"
              value={salas}
              onChange={handleChangeSalas}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="mais">mais</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} md={6}>
          <FormControl fullWidth>
            <InputLabel id="vagas">Vagas</InputLabel>
            <Select
              labelId="vagas"
              id="vagas"
              value={vagas}
              onChange={handleChangeVagas}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="mais">mais</MenuItem>
            </Select>
            <br/>
          </FormControl>
        </Grid>
      </Grid>
            <br/>
    </React.Fragment>
  );
}
