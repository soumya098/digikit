import PrimaryActionEmailHtml from '@/components/email/PrimaryActionEmailHtml';
import { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
	slug: 'users',
	auth: {
		verify: {
			generateEmailHTML: ({ token }) => {
				return '<p>Pls Verify</p>';
			}
		}
	},
	access: {
		read: () => true,
		create: () => true
	},
	fields: [
		{
			name: 'role',
			defaultValue: 'user',
			required: true,
			admin: {
				condition: (data, { user }) => {
					console.log(data, user);
					return true;
				}
			},
			type: 'select',
			options: [
				{ label: 'Admin', value: 'admin' },
				{ label: 'User', value: 'user' }
			]
		}
	]
};
