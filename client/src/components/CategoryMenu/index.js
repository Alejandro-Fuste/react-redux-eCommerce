import React from "react";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../../utils/actions";
import { QUERY_CATEGORIES } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function CategoryMenu() {}

export default CategoryMenu;
