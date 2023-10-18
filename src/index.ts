import "./style.scss";
import {url} from "./constants/index";

import axios from "../node_modules/axios/index";

axios.get(url).then(data => console.log(data.data))