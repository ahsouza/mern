import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

interface Endereco {
  cep: string
  bairro: string
  logradouro: string
  cidade: string
  estado: string
}

const AddressForm: React.FC = () => {
  const [cep, setCep] = React.useState(0)
  const [endereco, setEndereco] = React.useState<Endereco>({} as Endereco)
 
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCep(event.target.value as number)
  }

  const handleBlur = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json`)
    .then(res => {
      setEndereco({
        ...endereco,
        cep: res.data.cep,
        cidade: res.data.localidade,
        bairro: res.data.bairro,
        logradouro: res.data.logradouro,
        estado: res.data.uf
      })
    })
  }

  return (
    <React.Fragment>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={8} sm={4}>
          <TextField
            required
            onChange={handleChange}
            onBlur={handleBlur}
            name="cep"
            label="Cep"
            variant="standard"
            fullWidth
            inputProps={{ maxLength: 8 }}
          />
        </Grid>

        <Grid item xs={4} sm={3}>
          <TextField
            name="numero"
            label="Nº"
            fullWidth
            autoComplete="2021...."
            variant="standard"
          />
        </Grid>
        <Grid item xs={8} sm={8}>
          <TextField
            defaultValue="Cidade"
            name="cidade"
            value={endereco.cidade}
            InputProps={{ readOnly: true }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <TextField
            defaultValue="Estado"
            name="estado"
            value={endereco.estado}
            InputProps={{ readOnly: true }}
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextField
            defaultValue="Logradouro"
            name="logradouro"
            InputProps={{ readOnly: true }}
            value={endereco.logradouro}
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={6} sm={4}>
          <TextField
            name="bairro"
            defaultValue="Bairro"
            value={endereco.bairro}
            InputProps={{ readOnly: true }}
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
      <br/>
    </React.Fragment>
  )
}

export default AddressForm
