import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

export default function AddressForm() {
  const [cep, setCep] = React.useState(0)
  const [bairro, setBairro] = React.useState('')
  const [logradouro, setLogradouro] = React.useState('')
  const [cidade, setCidade] = React.useState('')
  const [estado, setEstado] = React.useState('')

  const handleChangeCep = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCep(event.target.value as number)
  }
  const handleBlur = (event: React.ChangeEvent<{ value: unknown }>) => {
    axios.get(`https://viacep.com.br/ws/${cep}/json`, {})
    .then(res => {
      setCidade(res.data.localidade)
      setBairro(res.data.bairro)
      setLogradouro(res.data.logradouro)
      setEstado(res.data.uf)
    })
  }

  return (
    <React.Fragment>
      <br/>
      <Grid container spacing={2}>
        <Grid item xs={3} sm={4}>
          <TextField
            required
            onChange={handleChangeCep}
            onBlur={handleBlur}
            id="cep"
            name="cep"
            label="Cep"
            fullWidth
            autoComplete="2021...."
            variant="standard"
            inputProps={{ maxLength: 8 }}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            id="bairro"
            name="bairro"
            label="Bairro"
            value={bairro}
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
        <Grid item xs={10} sm={8}>
          <TextField
            id="cidade"
            name="cidade"
            label="Cidade"
            value={cidade}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={2} sm={2}>
          <TextField
            id="estado"
            name="estado"
            label="Estado"
            value={estado}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            id="logradouro"
            name="logradouro"
            label="Logradouro"
            fullWidth
            value={logradouro}
            variant="standard"
          />
        </Grid>
    </Grid>
    <br/>
  </React.Fragment>
  )
}
