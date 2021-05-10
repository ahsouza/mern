import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }),
)
interface Props {
  children: React.ReactElement
  open: boolean
  value: number
}

function ValueLabelComponent(props: Props) {
  const { children, open, value } = props
  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  )
}
const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)'

const marks = [
  {
    value: 40,
    label: '40K',
  },
  {
    value: 500,
    label: '500K',
  },
  {
    value: 1000,
    label: '1M',
  },
]

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 15,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 10,
    borderRadius: 8,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider)

export default function Price() {
const classes = useStyles()
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div className={classes.margin} />
            <Typography gutterBottom>Valor próximo</Typography>
            <Typography gutterBottom>R$</Typography>
          <div className={classes.margin} />
            <PrettoSlider marks={marks} valueLabelDisplay="auto"  min={40} max={1000} aria-label="preço-BRL" defaultValue={40} />
          <div className={classes.margin} />
          <div className={classes.margin} />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
