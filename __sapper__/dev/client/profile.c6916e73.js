import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, F as stores$1, G as validate_store, H as component_subscribe, I as onMount, v as validate_slots, J as goto, e as element, x as text, a as space, b as claim_element, f as children, y as claim_text, g as detach_dev, h as claim_space, j as add_location, l as insert_dev, m as append_dev, K as listen_dev, D as set_data_dev, z as noop, L as set_store_value } from './client.5bc8a4be.js';

function post(endpoint, data) {
	return fetch(endpoint, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(r => r.json());
}

/* src/routes/profile.svelte generated by Svelte v3.22.2 */
const file = "src/routes/profile.svelte";

function create_fragment(ctx) {
	let button;
	let t0;
	let t1;
	let p;
	let t2;
	let t3_value = JSON.stringify({ $session: /*$session*/ ctx[0] }) + "";
	let t3;
	let dispose;

	const block = {
		c: function create() {
			button = element("button");
			t0 = text("logout");
			t1 = space();
			p = element("p");
			t2 = text("token ");
			t3 = text(t3_value);
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			t0 = claim_text(button_nodes, "logout");
			button_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "token ");
			t3 = claim_text(p_nodes, t3_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(button, file, 23, 4, 457);
			add_location(p, file, 24, 4, 500);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, button, anchor);
			append_dev(button, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			append_dev(p, t3);
			if (remount) dispose();
			dispose = listen_dev(button, "click", /*out*/ ctx[2], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*$session*/ 1 && t3_value !== (t3_value = JSON.stringify({ $session: /*$session*/ ctx[0] }) + "")) set_data_dev(t3, t3_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(button);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
			dispose();
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
	component_subscribe($$self, session, value => $$invalidate(0, $session = value));

	onMount(() => {
		if (!$session.token) {
			goto("/login");
		}
	});

	async function out() {
		const result = await post("/logout");

		if (result) {
			set_store_value(session, $session.token = null, $session);
			goto("/");
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Profile> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Profile", $$slots, []);

	$$self.$capture_state = () => ({
		goto,
		stores: stores$1,
		post,
		onMount,
		session,
		out,
		$session
	});

	return [$session, session, out];
}

class Profile extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Profile",
			options,
			id: create_fragment.name
		});
	}
}

export default Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jNjkxNmU3My5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy91dGlscy5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcHJvZmlsZS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBvc3QoZW5kcG9pbnQsIGRhdGEpIHtcblx0cmV0dXJuIGZldGNoKGVuZHBvaW50LCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0Y3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fVxuXHR9KS50aGVuKHIgPT4gci5qc29uKCkpO1xufSAiLCI8c2NyaXB0PlxuICAgIGltcG9ydCB7IGdvdG8sIHN0b3JlcyB9IGZyb20gJ0BzYXBwZXIvYXBwJztcbiAgICBpbXBvcnQgeyBwb3N0IH0gZnJvbSAnLi91dGlscy5qcyc7XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gICAgY29uc3QgeyBzZXNzaW9uIH0gPSBzdG9yZXMoKTtcblxuICAgIG9uTW91bnQoKCkgPT4ge1xuICAgICAgICBpZiAoISRzZXNzaW9uLnRva2VuKSB7XG4gICAgICAgICAgICBnb3RvKCcvbG9naW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gb3V0KCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwb3N0KCcvbG9nb3V0Jyk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICRzZXNzaW9uLnRva2VuID0gbnVsbDtcbiAgICAgICAgICAgIGdvdG8oJy8nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbjwvc2NyaXB0PlxuXG5cbiAgICA8YnV0dG9uIG9uOmNsaWNrPXtvdXR9PmxvZ291dDwvYnV0dG9uPlxuICAgIDxwPnRva2VuIHtKU09OLnN0cmluZ2lmeSh7ICRzZXNzaW9uIH0pfTwvcD5cbiAgICAiXSwibmFtZXMiOlsic3RvcmVzIl0sIm1hcHBpbmdzIjoiOztBQUFPLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7QUFDckMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDeEIsRUFBRSxNQUFNLEVBQUUsTUFBTTtBQUNoQixFQUFFLFdBQVcsRUFBRSxTQUFTO0FBQ3hCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0FBQzVCLEVBQUUsT0FBTyxFQUFFO0FBQ1gsR0FBRyxjQUFjLEVBQUUsa0JBQWtCO0FBQ3JDLEdBQUc7QUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCOzs7Ozs7Ozs7OztnQkNlYyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsZUFBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBRGpCLEdBQUc7OzswREFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsZUFBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBcEIzQixPQUFPLEtBQUtBLFFBQU07Ozs7Q0FFMUIsT0FBTztPQUNFLFFBQVEsQ0FBQyxLQUFLO0dBQ2YsSUFBSSxDQUFDLFFBQVE7Ozs7Z0JBSU4sR0FBRztRQUNSLE1BQU0sU0FBUyxJQUFJLENBQUMsU0FBUzs7TUFDL0IsTUFBTTs0QkFDTixRQUFRLENBQUMsS0FBSyxHQUFHLElBQUk7R0FDckIsSUFBSSxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
