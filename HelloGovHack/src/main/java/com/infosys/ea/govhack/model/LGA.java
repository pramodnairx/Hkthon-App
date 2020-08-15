/* Copyright (C) Pramod Nair - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pramod Nair <pramodnairx@gmail.com>, April 2018
 */

package com.infosys.ea.govhack.model;

import com.fasterxml.jackson.databind.JsonNode;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor

public class LGA {
	String name;
	String mapsPolygon;
}
