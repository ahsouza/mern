import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function Review() {
  const [estado, setEstado] = React.useState('ES');
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setEstado(event.target.value as string);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Preço & Imagem
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="endereco"
            name="endereco"
            label="Endereço"
            fullWidth
            autoComplete="Rua das oŕquídeas"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cidade"
            name="cidade"
            label="Cidade"
            fullWidth
            autoComplete="Rio de Janeiro..."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="cep"
            name="cep"
            label="Cep"
            fullWidth
            autoComplete="2916...."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={2}>

          <FormControl fullWidth>
            <InputLabel id="estado">Estado</InputLabel>
            <Select
              labelId="estado"
              id="estado"
              value={estado}
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>

        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Utilizar este endereço para meios de pagamento"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
