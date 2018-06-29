import React from 'react';

export default ({ number }) => {
	return (
		<tr>
			<td className="table__value table__big">{number.day}</td>
			<td className="table__value table__big js-value" data-set="Total-Unique-User">{number.TotalUniqueUser}</td>
			<td className="table__value table__big js-value" data-set="Total-Leads">{number.TotalLeads}</td>
			<td className="table__value table__big js-value" data-set="Total-Trx">{number.TotalTrx}</td>
			<td className="table__value table__big js-value" data-set="Total-Volume">{number.TotalVolume}</td>
			<td className="table__value table__big js-value" data-set="Total-Income">{number.TotalIncome}</td>
			<td className="table__value table__big js-value" data-set="Total-Webmasters">{number.TotalWebmasters}</td>
			<td className="table__value table__big js-value" data-set="Total-Webmasters-Income">{number.TotalWebmasterIncome}</td>
			<td className="table__value table__big js-value" data-set="Total-Net-Income">{number.TotalNetIncome}</td>
		</tr>
	);
};