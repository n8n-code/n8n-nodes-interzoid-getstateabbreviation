import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { stateDataStandardizationDescription } from './resources/state-data-standardization';

export class InterzoidGetstateabbreviation implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Interzoid Getstateabbreviation',
		name: 'N8nDevInterzoidGetstateabbreviation',
		icon: { light: 'file:./interzoid-getstateabbreviation.png', dark: 'file:./interzoid-getstateabbreviation.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API returns two-letter state/province abbreviations for standardization, queries, analytics, and data merging.',
		defaults: { name: 'Interzoid Getstateabbreviation' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevInterzoidGetstateabbreviationApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "State Data Standardization",
					"value": "State Data Standardization",
					"description": ""
				}
			],
			"default": ""
		},
		...stateDataStandardizationDescription
		],
	};
}
