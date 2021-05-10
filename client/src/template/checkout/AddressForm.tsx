import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

export default function AddressForm() {
  return (
    <React.Fragment>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={4}>
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
        <Grid item xs={6} sm={4}>
          <TextField
            id="bairro"
            name="bairro"
            label="Bairro"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={3} sm={4}>
          <TextField
            id="numero"
            name="numero"
            label="Nº"
            fullWidth
            autoComplete="2021...."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="cidade"
            name="cidade"
            label="Cidade"
            fullWidth
            autoComplete="Salvador..."
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            id="logradouro"
            name="logradouro"
            label="Logradouro"
            fullWidth
            autoComplete="Rua das orqúideas..."
            variant="standard"
          />
        </Grid>
    </Grid>
    <br/>
  </React.Fragment>
  )
}
