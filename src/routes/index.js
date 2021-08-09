import { PATHS } from '../config'
import Home from '../containers/Home'
import NotFound from '../containers/NotFound'
import Upload from '../containers/Upload'

const routes = [
    { exact: true, path: PATHS.HOME, component: Home },
    { exact: true, path: PATHS.SIGNIN, component: Upload },
    { exact: true, path: "*", component: NotFound }
]

export default routes