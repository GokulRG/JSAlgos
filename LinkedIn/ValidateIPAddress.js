/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
	// Checks whether the given IP Address is IPv4
	function validateIPV4(IP) {
		// the length of the individual entities in an IPv4 address is 4
		let splitAddress = IP.split('.');

		if (splitAddress.length !== 4) {
			return false;
		}

		// The individual components should only contain numbers and length should be more than zero
		let digits = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
		for (let ipComponent of splitAddress) {
			if (ipComponent.length <= 0) {
				return false;
			}

			for (let digit of ipComponent) {
				if (!digits.includes(digit)) {
					return false;
				}
			}
		}

		// Should be valid integers greater >= 0 and <= 255
		try {
			for (let ipComponent of splitAddress) {
				let int = parseInt(ipComponent);

				if (int < 0 || int > 255) {
					return false;
				}
			}
		} catch (error) {
			return false;
		}

		// Should check for leading zeros
		for (let ipComponent of splitAddress) {
			if (ipComponent.length > 1) {
				if (ipComponent.charAt(0) === '0') {
					return false;
				}
			}
		}

		// If all checks pass, return true
		return true;
	}

	// Checks whether the given IP Address is IPv6
	function validateIPV6(IP) {
		// check length of individual components
		let splitAddress = IP.split(':');

		if (splitAddress.length !== 8) {
			return false;
		}

		// Check length of individual component
		for (let ipComponent of splitAddress) {
			if (ipComponent.length < 1 || ipComponent.length > 4) {
				return false;
			}
		}

		// check whether the individual digits are valid
		let digits = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];

		for (let ipComponent of splitAddress) {
			ipComponent = ipComponent.toLowerCase();
			for (let character of ipComponent) {
				if (!digits.includes(character)) {
					return false;
				}
			}
		}

		// If none of the conditions fail, return true;
		return true;
	}

	let validIPV4 = validateIPV4(IP);

	if (validIPV4) {
		return 'IPv4';
	}

	let validIPV6 = validateIPV6(IP);

	if (validIPV6) {
		return 'IPv6';
	}

	return 'Neither';
};

console.log(validIPAddress('20EE:Fb8:85a3:0:0:8A2E:0370:7334'));
