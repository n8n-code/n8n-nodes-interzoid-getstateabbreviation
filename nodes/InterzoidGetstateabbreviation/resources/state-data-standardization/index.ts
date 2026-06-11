import type { INodeProperties } from 'n8n-workflow';

export const stateDataStandardizationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"State Data Standardization"
					]
				}
			},
			"options": [
				{
					"name": "Getstateabbreviation",
					"value": "Getstateabbreviation",
					"action": "Gets a two-letter abbreviation for a state or province name data",
					"description": "Gets a two-letter abbreviation for a state or province given a permutation of state or province data.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/getstateabbreviation"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /getstateabbreviation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"State Data Standardization"
					],
					"operation": [
						"Getstateabbreviation"
					]
				}
			}
		},
		{
			"displayName": "License",
			"name": "license",
			"required": true,
			"description": "Your Interzoid license API key. Register at www.interzoid.com/register",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "license",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"State Data Standardization"
					],
					"operation": [
						"Getstateabbreviation"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"required": true,
			"description": "State (or province) name from which to retrieve the two letter abbreviation.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"State Data Standardization"
					],
					"operation": [
						"Getstateabbreviation"
					]
				}
			}
		},
];
