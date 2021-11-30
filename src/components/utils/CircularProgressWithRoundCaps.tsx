import { CircularProgress } from '@mui/material'
import withStyledSvg from '../CircularProgressHOCs/withStyledSvg'

export const CircularProgressWithRoundCaps = withStyledSvg({ strokeLinecap: 'round' })(CircularProgress)
