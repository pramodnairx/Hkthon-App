/* Copyright (C) Pramod Nair - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pramod Nair <pramodnairx@gmail.com>, April 2018
 */

package com.infosys.ea.govhack.util.test;

import static org.junit.jupiter.api.Assertions.*;

import java.io.IOException;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.infosys.ea.govhack.model.LGA;
import com.infosys.ea.govhack.util.GeoJSONLGAMapper;

class GeoJSONLGAMapperTest {

	@Test
	void testMapGeojsonToLGA() {
		try {
			List<LGA> lgaList = GeoJSONLGAMapper.mapGeojsonToLGA("");
			assertEquals("FALLS CREEK ALPINE RESORT (UNINCORPORATED)", lgaList.get(0).getName());
			System.out.println(lgaList.get(0).getMapsPolygon());
		} catch (IOException e) {
			fail(e.getMessage());
			e.printStackTrace();
		}
	}

}
