/*
 * This program serves as the root of the source code for the personal website
 * of Nakshatra Mukhopadhyay.
 * Copyright (C) 2020 Nakshatra Mukhopadhyay
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

import React, { FunctionComponentElement } from "react";
import sum from "./sum";

const HomePage = (): FunctionComponentElement<HTMLDivElement> => (
  <div>Welcome to Next.js{"!".repeat(sum(1, 3))}</div>
);

export default HomePage;
