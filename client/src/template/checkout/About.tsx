import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import ReactInputMask from 'react-input-mask'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
)


export default function About() {
  let ref: HTMLInputElement | null = null
  const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i
  const letter = /(?!.*[DFIOQU])[A-Z]/i
  const digit = /[0-9]/
  const cpf = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g
  const mask = [firstLetter, digit, letter, " ", digit, letter, digit, cpf]

  const classes = useStyles()
  const [quartos, setQuartos] = React.useState(0)
  const [banheiros, setBanheiros] = React.useState(0)
  const [salas, setSalas] = React.useState(0)
  const [vagas, setVagas] = React.useState(0)
  const [telefone1, setTelefone1] = React.useState(0)
  const [telefone2, setTelefone2] = React.useState(0)

  const handleChangeQuartos = (event: React.ChangeEvent<{ value: unknown }>) => {
    setQuartos(event.target.value as number)
  }
  const handleChangeBanheiros = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBanheiros(event.target.value as number)
  }
  const handleChangeSalas = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSalas(event.target.value as number)
  }
  const handleChangeVagas = (event: React.ChangeEvent<{ value: unknown }>) => {
    setVagas(event.target.value as number)
  }
  const handleChangeTelefone1 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTelefone1(event.target.value as number)
  }
  const handleChangeTelefone2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTelefone2(event.target.value as number)
  }
  
  return (
    <React.Fragment>
      <br/>
      <Grid container spacing={3}>
        <Grid item xs={8} md={6}>
          <TextField
            required
            id="nome"
            label="Nome"
            fullWidth
            autoComplete="Apartamento..."
            variant="standard"
          />
        </Grid>
        <Grid item xs={4} md={6}>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
              <PhotoCamera />
            </IconButton>
          </label>
        </Grid>
        <Grid item xs={8} md={12}>
          <TextField
            id="descricao"
            label="Descrição"
            fullWidth
            autoComplete="Apartamento na Praia de Jacaraípe"
            variant="standard"
          />
        </Grid>
        <Grid item xs={4} md={4}>
          <TextField
            id="metro_cubico"
            label="M³"
            fullWidth
            autoComplete="1,65"
            variant="standard"
          />
        </Grid>

        <Grid item xs={3} md={2}>
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
        <Grid item xs={3} md={2}>
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
        <Grid item xs={3} md={2}>
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
        <Grid item xs={3} md={2}>
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
        <Grid item xs={12} md={4}>
          <div className="material-form-field">
            <ReactInputMask onChange={handleChangeTelefone1} id="telefone1" mask="+55 (99) 99999-9999" />
            <label className="material-form-field-label" htmlFor="field-text">Telefone 1</label>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="material-form-field">
            <ReactInputMask onChange={handleChangeTelefone2} id="telefone2" mask="+55 (99) 99999-9999" />
            <label className="material-form-field-label" htmlFor="field-text">Telefone 2</label>
          </div>
        </Grid>
      </Grid>
      <br/>
    </React.Fragment>
  )
}
