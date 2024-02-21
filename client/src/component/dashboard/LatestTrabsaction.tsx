import React from 'react';
import "./css/latest-transaction.css";

export default function LatestTransaction() {
    const Button = ({ type }: { type: string }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Expense Type</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Lunch</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">122</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Travel</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Other</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Fasion</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}
