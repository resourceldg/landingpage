import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as stores$1, G as validate_store, H as component_subscribe, v as validate_slots, J as goto, e as element, x as text, b as claim_element, f as children, y as claim_text, g as detach_dev, j as add_location, l as insert_dev, m as append_dev, D as set_data_dev, a as space, M as empty, h as claim_space, k as attr_dev, N as set_input_value, O as run_all, K as listen_dev, P as prevent_default, z as noop, L as set_store_value } from './client.207eee5b.js';

/* src/routes/signup.svelte generated by Svelte v3.22.2 */
const file = "src/routes/signup.svelte";

// (77:4) {#if error}
function create_if_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(/*error*/ ctx[4]);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, /*error*/ ctx[4]);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 77, 4, 1925);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*error*/ 16) set_data_dev(t, /*error*/ ctx[4]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(77:4) {#if error}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let form;
	let label0;
	let t0;
	let input0;
	let t1;
	let label1;
	let t2;
	let input1;
	let t3;
	let label2;
	let t4;
	let input2;
	let t5;
	let label3;
	let t6;
	let input3;
	let t7;
	let button;
	let t8;
	let t9;
	let if_block_anchor;
	let dispose;
	let if_block = /*error*/ ctx[4] && create_if_block(ctx);

	const block = {
		c: function create() {
			form = element("form");
			label0 = element("label");
			t0 = text("Nombre:\n        ");
			input0 = element("input");
			t1 = space();
			label1 = element("label");
			t2 = text("Email:\n        ");
			input1 = element("input");
			t3 = space();
			label2 = element("label");
			t4 = text("Contraseña:\n        ");
			input2 = element("input");
			t5 = space();
			label3 = element("label");
			t6 = text("Confirme Contraseña:\n        ");
			input3 = element("input");
			t7 = space();
			button = element("button");
			t8 = text("Signup");
			t9 = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { method: true });
			var form_nodes = children(form);
			label0 = claim_element(form_nodes, "LABEL", {});
			var label0_nodes = children(label0);
			t0 = claim_text(label0_nodes, "Nombre:\n        ");
			input0 = claim_element(label0_nodes, "INPUT", { type: true, placeholder: true });
			label0_nodes.forEach(detach_dev);
			t1 = claim_space(form_nodes);
			label1 = claim_element(form_nodes, "LABEL", {});
			var label1_nodes = children(label1);
			t2 = claim_text(label1_nodes, "Email:\n        ");
			input1 = claim_element(label1_nodes, "INPUT", { type: true, placeholder: true });
			label1_nodes.forEach(detach_dev);
			t3 = claim_space(form_nodes);
			label2 = claim_element(form_nodes, "LABEL", {});
			var label2_nodes = children(label2);
			t4 = claim_text(label2_nodes, "Contraseña:\n        ");

			input2 = claim_element(label2_nodes, "INPUT", {
				id: true,
				name: true,
				type: true,
				placeholder: true
			});

			label2_nodes.forEach(detach_dev);
			t5 = claim_space(form_nodes);
			label3 = claim_element(form_nodes, "LABEL", {});
			var label3_nodes = children(label3);
			t6 = claim_text(label3_nodes, "Confirme Contraseña:\n        ");

			input3 = claim_element(label3_nodes, "INPUT", {
				id: true,
				name: true,
				type: true,
				placeholder: true
			});

			label3_nodes.forEach(detach_dev);
			t7 = claim_space(form_nodes);
			button = claim_element(form_nodes, "BUTTON", { type: true, onclick: true });
			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Signup");
			button_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(input0, "type", "username");
			attr_dev(input0, "placeholder", "Nombre");
			add_location(input0, file, 49, 8, 1117);
			add_location(label0, file, 47, 6, 1085);
			attr_dev(input1, "type", "email");
			attr_dev(input1, "placeholder", "email");
			add_location(input1, file, 53, 8, 1241);
			add_location(label1, file, 51, 6, 1210);
			attr_dev(input2, "id", "pass");
			attr_dev(input2, "name", "password");
			attr_dev(input2, "type", "password");
			attr_dev(input2, "placeholder", "password");
			add_location(input2, file, 58, 8, 1363);
			add_location(label2, file, 56, 6, 1327);
			attr_dev(input3, "id", "confirm_pass");
			attr_dev(input3, "name", "confirm_pass");
			attr_dev(input3, "type", "password");
			attr_dev(input3, "placeholder", "Confirme contraseña");
			add_location(input3, file, 63, 8, 1531);
			add_location(label3, file, 61, 6, 1486);
			attr_dev(button, "type", "submit");
			attr_dev(button, "onclick", "submit");
			add_location(button, file, 71, 6, 1822);
			attr_dev(form, "method", "post");
			add_location(form, file, 46, 4, 1016);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, form, anchor);
			append_dev(form, label0);
			append_dev(label0, t0);
			append_dev(label0, input0);
			set_input_value(input0, /*username*/ ctx[2]);
			append_dev(form, t1);
			append_dev(form, label1);
			append_dev(label1, t2);
			append_dev(label1, input1);
			set_input_value(input1, /*email*/ ctx[3]);
			append_dev(form, t3);
			append_dev(form, label2);
			append_dev(label2, t4);
			append_dev(label2, input2);
			set_input_value(input2, /*password*/ ctx[0]);
			append_dev(form, t5);
			append_dev(form, label3);
			append_dev(label3, t6);
			append_dev(label3, input3);
			set_input_value(input3, /*confirm_pass*/ ctx[1]);
			append_dev(form, t7);
			append_dev(form, button);
			append_dev(button, t8);
			insert_dev(target, t9, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			if (remount) run_all(dispose);

			dispose = [
				listen_dev(input0, "input", /*input0_input_handler*/ ctx[9]),
				listen_dev(input1, "input", /*input1_input_handler*/ ctx[10]),
				listen_dev(input2, "input", /*input2_input_handler*/ ctx[11]),
				listen_dev(input3, "input", /*input3_input_handler*/ ctx[12]),
				listen_dev(form, "submit", prevent_default(/*handleSignup*/ ctx[6]), false, true, false)
			];
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*username*/ 4) {
				set_input_value(input0, /*username*/ ctx[2]);
			}

			if (dirty & /*email*/ 8 && input1.value !== /*email*/ ctx[3]) {
				set_input_value(input1, /*email*/ ctx[3]);
			}

			if (dirty & /*password*/ 1 && input2.value !== /*password*/ ctx[0]) {
				set_input_value(input2, /*password*/ ctx[0]);
			}

			if (dirty & /*confirm_pass*/ 2 && input3.value !== /*confirm_pass*/ ctx[1]) {
				set_input_value(input3, /*confirm_pass*/ ctx[1]);
			}

			if (/*error*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			if (detaching) detach_dev(t9);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let $session;
	const { session } = stores$1();
	validate_store(session, "session");
	component_subscribe($$self, session, value => $$invalidate(7, $session = value));
	let password = "";
	let confirm_pass = "";
	let username = "";
	let email = "";
	let phone = "";
	let error;

	const handleSignup = async () => {
		if (password === confirm_pass) {
			const response = await fetch("/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json"
				},
				body: JSON.stringify({ username, email, password })
			});

			const parsed = await response.json();

			if (parsed.error) {
				$$invalidate(4, error = parsed.error);
			} else {
				set_store_value(session, $session.token = parsed.token, $session);
				set_store_value(session, $session.user = parsed.user.username, $session);
				goto("/profile");
			}
		} else {
			(placeholderpass = "password confirm not match", placeholderpassconfirm = "please retry passwords");
		}
	};

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Signup> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Signup", $$slots, []);

	function input0_input_handler() {
		username = this.value;
		$$invalidate(2, username);
	}

	function input1_input_handler() {
		email = this.value;
		$$invalidate(3, email);
	}

	function input2_input_handler() {
		password = this.value;
		$$invalidate(0, password);
	}

	function input3_input_handler() {
		confirm_pass = this.value;
		$$invalidate(1, confirm_pass);
	}

	$$self.$capture_state = () => ({
		goto,
		stores: stores$1,
		session,
		password,
		confirm_pass,
		username,
		email,
		phone,
		error,
		handleSignup,
		$session
	});

	$$self.$inject_state = $$props => {
		if ("password" in $$props) $$invalidate(0, password = $$props.password);
		if ("confirm_pass" in $$props) $$invalidate(1, confirm_pass = $$props.confirm_pass);
		if ("username" in $$props) $$invalidate(2, username = $$props.username);
		if ("email" in $$props) $$invalidate(3, email = $$props.email);
		if ("phone" in $$props) phone = $$props.phone;
		if ("error" in $$props) $$invalidate(4, error = $$props.error);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		password,
		confirm_pass,
		username,
		email,
		error,
		session,
		handleSignup,
		$session,
		phone,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler
	];
}

class Signup extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Signup",
			options,
			id: create_fragment.name
		});
	}
}

export default Signup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmUzNjdiNTk4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3NpZ251cC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0XG4gICAgaW1wb3J0IHsgZ290bywgc3RvcmVzIH0gZnJvbSBcIkBzYXBwZXIvYXBwXCI7XG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSBzdG9yZXMoKTtcbiAgXG4gICAgbGV0IHBhc3N3b3JkID0gXCJcIjtcbiAgICBsZXQgY29uZmlybV9wYXNzID0gXCJcIjtcbiAgICBsZXQgdXNlcm5hbWUgPSBcIlwiOyBcbiAgICBsZXQgZW1haWwgPSBcIlwiO1xuICAgIGxldCBwaG9uZT1cIlwiO1xuICAgIGxldCBlcnJvcjtcbiAgXG4gICAgY29uc3QgaGFuZGxlU2lnbnVwID0gYXN5bmMgKCkgPT4ge1xuICAgICAgXG4gICAgICBpZiAocGFzc3dvcmQgPT09IGNvbmZpcm1fcGFzcyl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvc2lnbnVwXCIsIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZH0pLFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgY29uc3QgcGFyc2VkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgICAgICBpZiAocGFyc2VkLmVycm9yKSB7XG4gICAgICAgICAgZXJyb3IgPSBwYXJzZWQuZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJHNlc3Npb24udG9rZW4gPSBwYXJzZWQudG9rZW47XG4gICAgICAgICAgJHNlc3Npb24udXNlcj0gcGFyc2VkLnVzZXIudXNlcm5hbWU7XG4gICAgICAgICAgZ290byhcIi9wcm9maWxlXCIpO1xuICAgICAgICB9XG5cbiAgICAgIH1lbHNle1xuICAgICAgICBwbGFjZWhvbGRlcnBhc3M9XCJwYXNzd29yZCBjb25maXJtIG5vdCBtYXRjaFwiLFxuICAgICAgICBwbGFjZWhvbGRlcnBhc3Njb25maXJtPVwicGxlYXNlIHJldHJ5IHBhc3N3b3Jkc1wiXG5cbiAgICAgIH1cbiAgICB9O1xuICAgIFxuXG4gICAgXG4gIDwvc2NyaXB0PlxuICBcbiAgICBcbiAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9XCJ7aGFuZGxlU2lnbnVwfVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgTm9tYnJlOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9IFwiTm9tYnJlXCIgYmluZDp2YWx1ZT1cInt1c2VybmFtZX1cIiAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRW1haWw6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsXCIgYmluZDp2YWx1ZT1cIntlbWFpbH1cIiAvPlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsPlxuICAgICAgICBDb250cmFzZcOxYTpcbiAgICAgICAgPGlucHV0IGlkPSBcInBhc3NcIiBuYW1lPSBcInBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9IFwicGFzc3dvcmRcIiBiaW5kOnZhbHVlPVwie3Bhc3N3b3JkfVwiLz5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgQ29uZmlybWUgQ29udHJhc2XDsWE6XG4gICAgICAgIDxpbnB1dCBpZD0gXCJjb25maXJtX3Bhc3NcIiBuYW1lPVwiY29uZmlybV9wYXNzXCIgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJDb25maXJtZSBjb250cmFzZcOxYVwiIGJpbmQ6dmFsdWU9XCJ7Y29uZmlybV9wYXNzfVwiIC8+ICBcbiAgICAgIDwvbGFiZWw+IFxuXG4gICAgICA8IS0tIDxsYWJlbD5cbiAgICAgICAgVGVsw6lmb25vOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCJ0ZWxlZm9ub1wiIGJpbmQ6dmFsdWU9e3Bob25lfS8+XG4gICAgICA8L2xhYmVsPiAgICAgLS0+XG4gICAgICBcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uY2xpY2s9c3VibWl0ID5TaWdudXA8L2J1dHRvbj5cbiAgICAgIFxuICAgIDwvZm9ybT5cbiAgICBcbiAgICBcbiAgICB7I2lmIGVycm9yfVxuICAgIDxwPntlcnJvcn08L3A+XG4gICAgey9pZn0iXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O3NCQTZFUSxHQUFLOzs7Ozs7cUNBQUwsR0FBSzs7Ozs7Ozs7Ozs7O3VEQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQURKLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0EzQm9ELEdBQVE7Ozs7O3FDQUliLEdBQUs7Ozs7O3dDQUs4QixHQUFROzs7Ozs0Q0FLYSxHQUFZOzs7Ozs7Ozs7Ozs7OztnRUFqQjVGLEdBQVk7Ozs7O3lDQUdpQixHQUFROzs7eURBSWIsR0FBSztzQ0FBTCxHQUFLOzs7K0RBSzhCLEdBQVE7eUNBQVIsR0FBUTs7O3VFQUthLEdBQVk7NkNBQVosR0FBWTs7O2lCQWF4SCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBekVGLE9BQU8sS0FBS0EsUUFBTTs7O0tBRXRCLFFBQVEsR0FBRyxFQUFFO0tBQ2IsWUFBWSxHQUFHLEVBQUU7S0FDakIsUUFBUSxHQUFHLEVBQUU7S0FDYixLQUFLLEdBQUcsRUFBRTtLQUNWLEtBQUssR0FBQyxFQUFFO0tBQ1IsS0FBSzs7T0FFSCxZQUFZO01BRVosUUFBUSxLQUFLLFlBQVk7U0FDckIsUUFBUSxTQUFTLEtBQUssQ0FBQyxTQUFTO0lBQ3BDLE1BQU0sRUFBRSxNQUFNO0lBQ2QsT0FBTztLQUNMLGNBQWMsRUFBRSxrQkFBa0I7S0FDbEMsTUFBTSxFQUFFLGtCQUFrQjs7SUFFNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFROzs7U0FHNUMsTUFBTSxTQUFTLFFBQVEsQ0FBQyxJQUFJOztPQUU5QixNQUFNLENBQUMsS0FBSztvQkFDZCxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUs7OzZCQUVwQixRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLOzZCQUM3QixRQUFRLENBQUMsSUFBSSxHQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUTtJQUNuQyxJQUFJLENBQUMsVUFBVTs7O0lBSWpCLGVBQWUsR0FBQyw0QkFBNEIsRUFDNUMsc0JBQXNCLEdBQUMsd0JBQXdCOzs7Ozs7Ozs7Ozs7OztFQWFXLFFBQVE7Ozs7O0VBSWIsS0FBSzs7Ozs7RUFLOEIsUUFBUTs7Ozs7RUFLYSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
