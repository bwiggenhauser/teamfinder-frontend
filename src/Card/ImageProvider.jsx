import alex1 from "../Images/1_alex.jpg";
import basti1 from "../Images/1_basti.jpg";
import fixe1 from "../Images/1_fixe.jpg";
import jki1 from "../Images/1_jki.jpg";
import jolle1 from "../Images/1_jolle.jpg";
import kim1 from "../Images/1_kim.png";
import maex1 from "../Images/1_maex.jpg";
import mendel1 from "../Images/1_mendel.jpg";
import nigge1 from "../Images/1_nigge.jpg";
import ps1 from "../Images/1_ps.jpg";
import vale1 from "../Images/1_vale.jpg";
import vimme1 from "../Images/1_vimme.jpg";
import alex2 from "../Images/2_alex.jpg";
import basti2 from "../Images/2_basti.jpg";
import fixe2 from "../Images/2_fixe.jpg";
import jki2 from "../Images/2_jki.jpg";
import jolle2 from "../Images/2_jolle.jpg";
import kim2 from "../Images/2_kim.png";
import maex2 from "../Images/2_maex.jpg";
import mendel2 from "../Images/2_mendel.jpg";
import nigge2 from "../Images/2_nigge.jpg";
import ps2 from "../Images/2_ps.jpg";
import vale2 from "../Images/2_vale.jpg";
import vimme2 from "../Images/2_vimme.jpg";
import alex3 from "../Images/3_alex.jpg";
import basti3 from "../Images/3_basti.jpg";
import fixe3 from "../Images/3_fixe.jpg";
import jki3 from "../Images/3_jki.jpg";
import jolle3 from "../Images/3_jolle.jpg";
import kim3 from "../Images/3_kim.png";
import maex3 from "../Images/3_maex.jpg";
import mendel3 from "../Images/3_mendel.jpg";
import nigge3 from "../Images/3_nigge.jpg";
import ps3 from "../Images/3_ps.jpg";
import vale3 from "../Images/3_vale.jpg";
import vimme3 from "../Images/3_vimme.jpg";
import fallback from "../Images/fallback.jpg";

export const imageProvider = (player, rarity) => {
	if (player == "basti") {
		if (rarity == 1) {
			return basti1;
		}
		if (rarity == 2) {
			return basti2;
		}
		return basti3;
	}
	if (player == "fixe") {
		if (rarity == 1) {
			return fixe1;
		}
		if (rarity == 2) {
			return fixe2;
		}
		return fixe3;
	}
	if (player == "jki") {
		if (rarity == 1) {
			return jki1;
		}
		if (rarity == 2) {
			return jki2;
		}
		return jki3;
	}
	if (player == "jolle") {
		if (rarity == 1) {
			return jolle1;
		}
		if (rarity == 2) {
			return jolle2;
		}
		return jolle3;
	}
	if (player == "maex") {
		if (rarity == 1) {
			return maex1;
		}
		if (rarity == 2) {
			return maex2;
		}
		return maex3;
	}
	if (player == "mendel") {
		if (rarity == 1) {
			return mendel1;
		}
		if (rarity == 2) {
			return mendel2;
		}
		return mendel3;
	}
	if (player == "nigge") {
		if (rarity == 1) {
			return nigge1;
		}
		if (rarity == 2) {
			return nigge2;
		}
		return nigge3;
	}
	if (player == "ps") {
		if (rarity == 1) {
			return ps1;
		}
		if (rarity == 2) {
			return ps2;
		}
		return ps3;
	}
	if (player == "vale") {
		if (rarity == 1) {
			return vale1;
		}
		if (rarity == 2) {
			return vale2;
		}
		return vale3;
	}
	if (player == "vimme") {
		if (rarity == 1) {
			return vimme1;
		}
		if (rarity == 2) {
			return vimme2;
		}
		return vimme3;
	}
	if (player == "kim") {
		if (rarity == 1) {
			return kim1;
		}
		if (rarity == 2) {
			return kim2;
		}
		return kim3;
	}
	if (player == "alex") {
		if (rarity == 1) {
			return alex1;
		}
		if (rarity == 2) {
			return alex2;
		}
		return alex3;
	}
	return fallback;
};
