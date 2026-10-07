const translations = {
  en: {
    status: "Data through Sep 2026", eyebrow: "FINANCIAL PERFORMANCE • CASE STUDY", title: "Massage therapy business dashboard",
    subtitle: "Revenue, profitability, working capital, service mix, and capacity in one decision-ready view.", modelLabel: "MODEL", modelValue: "Actuals + modeled costs",
    modelNote: "AR/AP due dates are synthetic and clearly separated from actual financial records.", year: "Year", month: "Month", service: "Service", reset: "Reset filters",
    tabExecutive: "Executive", tabProfitability: "Profitability", tabCustomers: "Customers", tabCashflow: "Expenses & cash", tabAging: "AR / AP aging", tabCapacity: "Capacity",
    trendLabel: "PERFORMANCE TREND", trendTitle: "Monthly revenue", mixLabel: "SERVICE MIX", mixTitle: "Revenue concentration", comparisonLabel: "MONTHLY COMPARISON",
    comparisonTitle: "Revenue and cash outflows", insightsLabel: "MANAGEMENT INSIGHTS", insightsTitle: "What the selected period suggests", economicsLabel: "SERVICE ECONOMICS",
    economicsTitle: "Revenue, contribution, margin, and profit per hour", revenue: "Revenue", sales: "Sales", hours: "Hours", contribution: "Contribution", margin: "Margin", profitHour: "Profit / hour",
    marginLabel: "MARGIN PROFILE", marginTitle: "Contribution margin by service", pricingLabel: "PRICING SIGNAL", pricingTitle: "Average realized price vs list price",
    retentionLabel: "RETENTION", retentionTitle: "Repeat customer rate by year", customerActionLabel: "CUSTOMER ACTIONS", customerActionTitle: "How to turn retention into growth",
    expenseLabel: "EXPENSE STRUCTURE", expenseTitle: "Spending by accounting group", cashLabel: "CASH FLOW CLASSIFICATION", cashTitle: "Operating, investing, and financing",
    behaviorLabel: "COST BEHAVIOR", behaviorTitle: "Fixed, variable, semivariable, and event-driven spending", syntheticTitle: "Demonstration data",
    syntheticText: "Payment and due dates used in AR/AP aging are synthetic. Actual revenue and expense amounts remain unchanged.", arTitle: "Accounts receivable by aging bucket",
    apTitle: "Accounts payable by aging bucket", capacityLabel: "CAPACITY PLANNING", capacityTitle: "Theoretical and billable utilization by month", capacityNote: "Billable capacity = 70% of 176 hours",
    peakLabel: "PEAK MANAGEMENT", peakTitle: "Use pricing and mix when capacity is tight", serviceHoursLabel: "SERVICE HOURS", serviceHoursTitle: "Hours consumed by service",
    footer: "Portfolio case study by Nicole Oliveira. Built from anonymized and aggregated operational data.", back: "Back to portfolio", allYears: "All years", allMonths: "All months", allServices: "All services",
    revenueKpi: "Revenue", growthKpi: "Revenue growth vs prior year", contributionKpi: "Modeled contribution", contributionMarginKpi: "Contribution margin", sessionsKpi: "Sessions sold",
    ticketKpi: "Average ticket", occupancyKpi: "Theoretical occupancy", practicalKpi: "Billable-capacity utilization", arOpenKpi: "Open AR (synthetic)", apOpenKpi: "Open AP (synthetic)",
    expensesKpi: "Cash outflows", operatingKpi: "Operating cash outflows", investingKpi: "Investing cash outflows", financingKpi: "Financing cash outflows", customersKpi: "Customers",
    repeatKpi: "Repeat customer rate", top10Kpi: "Top 10 revenue share", salesCustomerKpi: "Sales per customer", selected: "Selected", periodOne: "month", periods: "months", noData: "No data for the selected filters.",
    actual: "Actual", list: "List", customersNote: "Customer metrics are shown by full year to protect privacy and avoid double counting across months.",
  },
  pt: {
    status: "Dados até set/2026", eyebrow: "DESEMPENHO FINANCEIRO • ESTUDO DE CASO", title: "Dashboard de uma empresa de massoterapia",
    subtitle: "Receita, rentabilidade, capital de giro, mix de serviços e capacidade em uma visão voltada à decisão.", modelLabel: "MODELO", modelValue: "Realizado + custos modelados",
    modelNote: "Os vencimentos de AR/AP são sintéticos e estão separados dos registros financeiros reais.", year: "Ano", month: "Mês", service: "Serviço", reset: "Limpar filtros",
    tabExecutive: "Executivo", tabProfitability: "Rentabilidade", tabCustomers: "Clientes", tabCashflow: "Gastos e caixa", tabAging: "Aging de AR / AP", tabCapacity: "Capacidade",
    trendLabel: "TENDÊNCIA DE DESEMPENHO", trendTitle: "Receita mensal", mixLabel: "MIX DE SERVIÇOS", mixTitle: "Concentração da receita", comparisonLabel: "COMPARAÇÃO MENSAL",
    comparisonTitle: "Receita e saídas de caixa", insightsLabel: "INSIGHTS GERENCIAIS", insightsTitle: "O que o período selecionado indica", economicsLabel: "ECONOMIA DOS SERVIÇOS",
    economicsTitle: "Receita, contribuição, margem e lucro por hora", revenue: "Receita", sales: "Vendas", hours: "Horas", contribution: "Contribuição", margin: "Margem", profitHour: "Lucro / hora",
    marginLabel: "PERFIL DE MARGEM", marginTitle: "Margem de contribuição por serviço", pricingLabel: "SINAL DE PREÇO", pricingTitle: "Preço médio realizado versus preço de tabela",
    retentionLabel: "RETENÇÃO", retentionTitle: "Taxa de recompra por ano", customerActionLabel: "AÇÕES DE CLIENTES", customerActionTitle: "Como transformar retenção em crescimento",
    expenseLabel: "ESTRUTURA DE GASTOS", expenseTitle: "Gastos por grupo contábil", cashLabel: "CLASSIFICAÇÃO DO FLUXO DE CAIXA", cashTitle: "Operacional, investimento e financiamento",
    behaviorLabel: "COMPORTAMENTO DOS CUSTOS", behaviorTitle: "Gastos fixos, variáveis, semivariáveis e eventuais", syntheticTitle: "Dados demonstrativos",
    syntheticText: "As datas de pagamento e vencimento utilizadas no aging de AR/AP são sintéticas. Os valores reais de receita e gastos não foram alterados.", arTitle: "Contas a receber por faixa de atraso",
    apTitle: "Contas a pagar por faixa de atraso", capacityLabel: "PLANEJAMENTO DA CAPACIDADE", capacityTitle: "Utilização teórica e faturável por mês", capacityNote: "Capacidade faturável = 70% de 176 horas",
    peakLabel: "GESTÃO DOS PICOS", peakTitle: "Usar preço e mix quando a capacidade estiver pressionada", serviceHoursLabel: "HORAS POR SERVIÇO", serviceHoursTitle: "Horas consumidas por serviço",
    footer: "Estudo de caso do portfólio de Nicole Oliveira. Construído com dados operacionais anonimizados e agregados.", back: "Voltar ao portfólio", allYears: "Todos os anos", allMonths: "Todos os meses", allServices: "Todos os serviços",
    revenueKpi: "Receita", growthKpi: "Crescimento versus ano anterior", contributionKpi: "Contribuição modelada", contributionMarginKpi: "Margem de contribuição", sessionsKpi: "Sessões vendidas",
    ticketKpi: "Ticket médio", occupancyKpi: "Ocupação teórica", practicalKpi: "Utilização da capacidade faturável", arOpenKpi: "AR em aberto (sintético)", apOpenKpi: "AP em aberto (sintético)",
    expensesKpi: "Saídas de caixa", operatingKpi: "Saídas operacionais", investingKpi: "Saídas de investimento", financingKpi: "Saídas de financiamento", customersKpi: "Clientes",
    repeatKpi: "Taxa de recompra", top10Kpi: "Participação dos 10 maiores", salesCustomerKpi: "Vendas por cliente", selected: "Selecionado", periodOne: "mês", periods: "meses", noData: "Não há dados para os filtros selecionados.",
    actual: "Realizado", list: "Tabela", customersNote: "Os indicadores de clientes são apresentados por ano completo para preservar a privacidade e evitar dupla contagem entre meses.",
  },
};

const params = new URLSearchParams(location.search);
const lang = params.get("lang") === "pt" ? "pt" : "en";
const t = translations[lang];
document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
document.title = lang === "pt" ? "Dashboard Financeiro | Nicole Oliveira" : "Financial Performance Dashboard | Nicole Oliveira";
document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t[el.dataset.i18n]; });
document.querySelectorAll("[data-language]").forEach((el) => el.classList.toggle("active", el.dataset.language === lang));
document.querySelector("#portfolio-link").href = lang === "pt" ? "pt.html#projects" : "index.html#projects";
document.querySelector("#footer-portfolio-link").href = lang === "pt" ? "pt.html#projects" : "index.html#projects";

const fmtMoney = new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const fmtNumber = new Intl.NumberFormat(lang === "pt" ? "pt-BR" : "en-US", { maximumFractionDigits: 1 });
const fmtPercent = (n) => `${fmtNumber.format((Number(n) || 0) * 100)}%`;
const colors = ["#4ca783", "#e87b61", "#d7b84b", "#6f9fc5", "#8d77b5", "#7e9b8f", "#c6905a", "#4d7d75", "#bd6f84"];
const businessLabels = {
  "Ativo imobilizado": "Property, plant & equipment",
  "Custos dos produtos": "Product costs",
  "Custos dos serviços": "Service delivery costs",
  "Despesas administrativas": "General & administrative expenses",
  "Despesas operacionais": "Operating expenses",
  "Obrigações tributárias": "Tax liabilities",
  "Tributos": "Taxes",
  "Eventual": "One-time",
  "Fixo": "Fixed",
  "Parcelado": "Installment-based",
  "Semivariável": "Semi-variable",
  "Variável": "Variable",
  "Financiamento": "Financing",
  "Investimento": "Investing",
  "Operacional": "Operating",
  "Liquidado": "Paid",
  "A vencer": "Current",
  "1-30": "1–30 days past due",
  "31-60": "31–60 days past due",
  "61-90": "61–90 days past due",
  "90+": "90+ days past due",
};
const businessLabel = (label) => lang === "en" ? (businessLabels[label] || label) : label;

let data;
const state = { year: "2026", month: "all", service: "all", view: "executive" };
const yearFilter = document.querySelector("#year-filter");
const monthFilter = document.querySelector("#month-filter");
const serviceFilter = document.querySelector("#service-filter");

const sum = (values) => values.reduce((a, b) => a + (Number(b) || 0), 0);
const addMaps = (target, source) => Object.entries(source || {}).forEach(([key, value]) => { target[key] = (target[key] || 0) + Number(value || 0); });
const monthName = (month) => new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", { month: "short", year: "2-digit", timeZone: "UTC" }).format(new Date(`${month}-01T00:00:00Z`));

function selectedMonths(year = state.year) {
  return data.monthly.filter((row) => (year === "all" || row.month.startsWith(year)) && (state.month === "all" || row.month.endsWith(`-${state.month}`)));
}

function aggregateRows(rows = selectedMonths()) {
  const serviceMap = {};
  const result = { revenue: 0, sales: 0, sessions: 0, hours: 0, modeledCost: 0, arOpen: 0, expenses: 0, apOpen: 0, expenseGroups: {}, behavior: {}, cashFlow: {}, arAging: {}, apAging: {}, services: serviceMap };
  rows.forEach((row) => {
    result.expenses += Number(row.expenses || 0); result.apOpen += Number(row.ap_open || 0);
    addMaps(result.expenseGroups, row.expense_groups); addMaps(result.behavior, row.expense_behavior); addMaps(result.cashFlow, row.cash_flow); addMaps(result.apAging, row.ap_aging);
    row.services.filter((s) => state.service === "all" || s.service === state.service).forEach((s) => {
      const target = serviceMap[s.service] ||= { service: s.service, revenue: 0, sales: 0, sessions: 0, hours: 0, modeledCost: 0, arOpen: 0, arAging: {} };
      target.revenue += Number(s.revenue); target.sales += Number(s.sales); target.sessions += Number(s.sessions); target.hours += Number(s.hours); target.modeledCost += Number(s.modeled_cost); target.arOpen += Number(s.ar_open); addMaps(target.arAging, s.ar_aging);
      result.revenue += Number(s.revenue); result.sales += Number(s.sales); result.sessions += Number(s.sessions); result.hours += Number(s.hours); result.modeledCost += Number(s.modeled_cost); result.arOpen += Number(s.ar_open); addMaps(result.arAging, s.ar_aging);
    });
  });
  Object.values(serviceMap).forEach((service) => {
    service.contribution = service.revenue - service.modeledCost;
    service.margin = service.revenue ? service.contribution / service.revenue : 0;
  });
  result.contribution = result.revenue - result.modeledCost;
  result.margin = result.revenue ? result.contribution / result.revenue : 0;
  result.avgTicket = result.sales ? result.revenue / result.sales : 0;
  result.occupancy = rows.length ? result.hours / (data.meta.capacity_hours * rows.length) : 0;
  result.practicalOccupancy = rows.length ? result.hours / (data.meta.capacity_hours * data.meta.billable_capacity_rate * rows.length) : 0;
  return result;
}

function priorYearGrowth(current) {
  if (state.year === "all") return null;
  const previous = String(Number(state.year) - 1);
  const previousRows = data.monthly.filter((row) => row.month.startsWith(previous) && (state.month === "all" || row.month.endsWith(`-${state.month}`)));
  const previousRevenue = previousRows.flatMap((row) => row.services).filter((s) => state.service === "all" || s.service === state.service).reduce((a, s) => a + Number(s.revenue), 0);
  return previousRevenue ? current.revenue / previousRevenue - 1 : null;
}

function kpi(label, value, note = "", negative = false) {
  return `<article class="kpi${negative ? " negative" : ""}"><small>${label}</small><strong>${value}</strong><span>${note}</span></article>`;
}

function barList(map, formatter = (value) => fmtMoney.format(value)) {
  const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
  if (!entries.length) return `<p>${t.noData}</p>`;
  const max = Math.max(...entries.map(([, value]) => value), 1);
  return `<div class="bar-list">${entries.map(([label, value]) => `<div class="bar-row"><label title="${businessLabel(label)}">${businessLabel(label)}</label><div class="bar-track"><i style="width:${Math.max(2, value / max * 100)}%"></i></div><b>${formatter(value)}</b></div>`).join("")}</div>`;
}

function lineChart(rows) {
  const values = rows.map((row) => row.services.filter((s) => state.service === "all" || s.service === state.service).reduce((a, s) => a + Number(s.revenue), 0));
  if (!values.length) return `<p>${t.noData}</p>`;
  const width = 760, height = 270, padX = 42, padY = 28, max = Math.max(...values, 1);
  const points = values.map((v, i) => [padX + i * ((width - padX * 2) / Math.max(values.length - 1, 1)), height - padY - v / max * (height - padY * 2)]);
  const line = points.map((p) => p.join(",")).join(" ");
  const area = `${padX},${height - padY} ${line} ${points.at(-1)[0]},${height - padY}`;
  return `<svg class="trend-svg" viewBox="0 0 ${width} ${height}" role="img"><line class="grid" x1="${padX}" x2="${width-padX}" y1="${height-padY}" y2="${height-padY}"/><polygon class="area" points="${area}"/><polyline class="line" points="${line}"/>${points.map((p,i)=>`<circle cx="${p[0]}" cy="${p[1]}" r="4"><title>${monthName(rows[i].month)}: ${fmtMoney.format(values[i])}</title></circle>`).join("")}${points.map((p,i)=>`<text x="${p[0]}" y="${height-6}" text-anchor="middle">${monthName(rows[i].month).split(" ")[0]}</text>`).join("")}</svg>`;
}

function donut(serviceMap) {
  const entries = Object.values(serviceMap).sort((a, b) => b.revenue - a.revenue);
  const total = sum(entries.map((s) => s.revenue));
  if (!total) return `<p>${t.noData}</p>`;
  let position = 0;
  const segments = entries.map((s, i) => { const start = position; position += s.revenue / total * 100; return `${colors[i % colors.length]} ${start}% ${position}%`; });
  return `<div class="donut-wrap"><div class="data-donut" style="background:conic-gradient(${segments.join(",")})"><div class="donut-center"><strong>${fmtMoney.format(total)}</strong><span>${t.revenue}</span></div></div><div class="legend">${entries.slice(0,6).map((s,i)=>`<div><i style="background:${colors[i % colors.length]}"></i><span>${s.service}</span><b>${fmtPercent(s.revenue/total)}</b></div>`).join("")}</div></div>`;
}

function comparisonChart(rows) {
  if (!rows.length) return `<p>${t.noData}</p>`;
  const pairs = rows.map((row) => ({ month: row.month, revenue: row.services.filter((s)=>state.service==="all"||s.service===state.service).reduce((a,s)=>a+Number(s.revenue),0), expenses: Number(row.expenses || 0) }));
  const max = Math.max(...pairs.flatMap((p)=>[p.revenue,p.expenses]),1);
  return `<div class="comparison-bars">${pairs.map((p)=>`<div class="comparison-group"><i style="height:${p.revenue/max*220}px" title="${t.revenue}: ${fmtMoney.format(p.revenue)}"></i><i style="height:${p.expenses/max*220}px" title="${t.expensesKpi}: ${fmtMoney.format(p.expenses)}"></i><span>${monthName(p.month).split(" ")[0]}</span></div>`).join("")}</div>`;
}

function capacityChart(rows) {
  if (!rows.length) return `<p>${t.noData}</p>`;
  return `<div class="capacity-list">${rows.map((row)=>{const hours=row.services.filter((s)=>state.service==="all"||s.service===state.service).reduce((a,s)=>a+Number(s.hours),0);const rate=hours/data.meta.capacity_hours;const practical=rate/data.meta.billable_capacity_rate;return `<div class="capacity-row ${practical>=1?"high":""}"><span>${monthName(row.month)}</span><div class="capacity-track"><i style="width:${Math.min(rate*100,100)}%"></i></div><b>${fmtPercent(rate)} / ${fmtPercent(practical)}</b></div>`}).join("")}</div>`;
}

function render() {
  const rows = selectedMonths();
  const agg = aggregateRows(rows);
  const growth = priorYearGrowth(agg);
  document.querySelector("#filter-summary").textContent = `${t.selected}: ${rows.length} ${rows.length === 1 ? t.periodOne : t.periods} · ${fmtMoney.format(agg.revenue)} · ${fmtNumber.format(agg.sessions)} ${t.sessionsKpi.toLowerCase()}`;
  document.querySelector("#executive-kpis").innerHTML = [
    kpi(t.revenueKpi, fmtMoney.format(agg.revenue), growth === null ? "" : `${growth >= 0 ? "↑" : "↓"} ${fmtPercent(Math.abs(growth))}`, growth < 0),
    kpi(t.contributionKpi, fmtMoney.format(agg.contribution), fmtPercent(agg.margin)),
    kpi(t.sessionsKpi, fmtNumber.format(agg.sessions), `${fmtNumber.format(agg.hours)} h`),
    kpi(t.practicalKpi, fmtPercent(agg.practicalOccupancy), `${t.occupancyKpi}: ${fmtPercent(agg.occupancy)}`, agg.practicalOccupancy > 1),
  ].join("");
  document.querySelector("#revenue-trend").innerHTML = lineChart(rows);
  document.querySelector("#trend-total").textContent = fmtMoney.format(agg.revenue);
  document.querySelector("#service-mix").innerHTML = donut(agg.services);
  document.querySelector("#revenue-expense-chart").innerHTML = comparisonChart(rows);
  const services = Object.values(agg.services).sort((a,b)=>b.revenue-a.revenue);
  const top = services[0]; const lowMargin = [...services].sort((a,b)=>(a.revenue?a.contribution/a.revenue:0)-(b.revenue?b.contribution/b.revenue:0))[0];
  document.querySelector("#dynamic-insights").innerHTML = lang === "pt"
    ? `<li>${growth === null ? "Use os filtros anuais para comparar o crescimento." : `A receita variou ${fmtPercent(Math.abs(growth))} ${growth >= 0 ? "acima" : "abaixo"} do período equivalente anterior.`}</li><li>${top ? `${top.service} liderou o período com ${fmtPercent(top.revenue/agg.revenue)} da receita.` : t.noData}</li><li>${lowMargin ? `${lowMargin.service} apresentou a menor margem de contribuição do recorte: ${fmtPercent(lowMargin.contribution/lowMargin.revenue)}.` : t.noData}</li><li>${agg.practicalOccupancy >= .85 ? "A capacidade faturável está pressionada; priorize preço, margem e gestão de agenda." : "Ainda há capacidade faturável para crescer com retenção e campanhas seletivas."}</li>`
    : `<li>${growth === null ? "Use annual filters to compare growth." : `Revenue was ${fmtPercent(Math.abs(growth))} ${growth >= 0 ? "above" : "below"} the comparable prior period.`}</li><li>${top ? `${top.service} led the period with ${fmtPercent(top.revenue/agg.revenue)} of revenue.` : t.noData}</li><li>${lowMargin ? `${lowMargin.service} had the lowest contribution margin in the selection: ${fmtPercent(lowMargin.contribution/lowMargin.revenue)}.` : t.noData}</li><li>${agg.practicalOccupancy >= .85 ? "Billable capacity is tight; prioritize pricing, margin, and schedule management." : "Billable capacity remains available for retention-led and selective campaign growth."}</li>`;

  document.querySelector("#profitability-kpis").innerHTML = [kpi(t.contributionKpi,fmtMoney.format(agg.contribution),fmtPercent(agg.margin)),kpi(t.ticketKpi,fmtMoney.format(agg.avgTicket),`${fmtNumber.format(agg.sales)} ${t.sales.toLowerCase()}`),kpi(t.hours,`${fmtNumber.format(agg.hours)} h`,`${fmtNumber.format(agg.hours?agg.contribution/agg.hours:0)} / h`),kpi(t.service,fmtNumber.format(services.length),"")].join("");
  document.querySelector("#service-table").innerHTML = services.map((s)=>{const margin=s.revenue?s.contribution/s.revenue:0;return `<tr><td><strong>${s.service}</strong></td><td>${fmtMoney.format(s.revenue)}</td><td>${fmtNumber.format(s.sales)}</td><td>${fmtNumber.format(s.hours)}</td><td>${fmtMoney.format(s.contribution)}</td><td><span class="margin-pill ${margin<.4?"low":""}">${fmtPercent(margin)}</span></td><td>${fmtMoney.format(s.hours?s.contribution/s.hours:0)}</td></tr>`}).join("");
  document.querySelector("#margin-chart").innerHTML = barList(Object.fromEntries(services.map((s)=>[s.service,s.revenue?s.contribution/s.revenue:0])),fmtPercent);
  document.querySelector("#pricing-chart").innerHTML = barList(Object.fromEntries(services.map((s)=>[s.service,s.sales?s.revenue/s.sales:0])),(value)=>fmtMoney.format(value));

  const customerKey = state.year === "all" ? "all" : state.year;
  const cust = data.customers[customerKey] || data.customers.all;
  const customerRows = state.year === "all" ? data.monthly : data.monthly.filter((row)=>row.month.startsWith(customerKey));
  const periodSales = customerRows.flatMap((row)=>row.services).reduce((total, service)=>total+Number(service.sales||0),0);
  document.querySelector("#customer-kpis").innerHTML = [kpi(t.customersKpi,fmtNumber.format(cust.customers),t.customersNote),kpi(t.repeatKpi,fmtPercent(cust.repeat_rate),`${fmtNumber.format(cust.repeat_customers)} ${t.customersKpi.toLowerCase()}`),kpi(t.top10Kpi,fmtPercent(cust.top10_share),""),kpi(t.salesCustomerKpi,fmtNumber.format(periodSales/cust.customers),"")].join("");
  document.querySelector("#retention-chart").innerHTML = barList(Object.fromEntries(Object.entries(data.customers).filter(([k])=>k!=="all").map(([year,v])=>[year,v.repeat_rate])),fmtPercent);
  document.querySelector("#customer-actions").innerHTML = lang === "pt" ? "<li>Automatizar lembretes de recompra após o término dos pacotes.</li><li>Separar clientes novos, recorrentes e inativos.</li><li>Oferecer serviços de alta margem como complemento aos pacotes MD.</li><li>Monitorar concentração e intervalo entre compras.</li>" : "<li>Automate repurchase reminders after packages end.</li><li>Separate new, repeat, and inactive customers.</li><li>Cross-sell high-margin services to MD package customers.</li><li>Monitor concentration and time between purchases.</li>";

  document.querySelector("#cash-kpis").innerHTML = [kpi(t.expensesKpi,fmtMoney.format(agg.expenses),""),kpi(t.operatingKpi,fmtMoney.format(agg.cashFlow["Operacional"]||0),""),kpi(t.investingKpi,fmtMoney.format(agg.cashFlow["Investimento"]||0),""),kpi(t.financingKpi,fmtMoney.format(agg.cashFlow["Financiamento"]||0),"")].join("");
  document.querySelector("#expense-groups").innerHTML = barList(agg.expenseGroups);
  document.querySelector("#cash-flow-chart").innerHTML = barList(agg.cashFlow);
  document.querySelector("#behavior-chart").innerHTML = barList(agg.behavior);

  const overdueAR = Object.entries(agg.arAging).filter(([k])=>!["Liquidado","A vencer"].includes(k)).reduce((a,[,v])=>a+v,0);
  const overdueAP = Object.entries(agg.apAging).filter(([k])=>k!=="A vencer").reduce((a,[,v])=>a+v,0);
  const overdueLabel = lang === "pt" ? "vencido" : "overdue";
  document.querySelector("#aging-kpis").innerHTML = [kpi(t.arOpenKpi,fmtMoney.format(agg.arOpen),`${fmtMoney.format(overdueAR)} ${overdueLabel}`),kpi(t.apOpenKpi,fmtMoney.format(agg.apOpen),`${fmtMoney.format(overdueAP)} ${overdueLabel}`),kpi(lang==="pt"?"AR vencido %":"AR overdue %",fmtPercent(agg.arOpen?overdueAR/agg.arOpen:0),""),kpi(lang==="pt"?"AP vencido %":"AP overdue %",fmtPercent(agg.apOpen?overdueAP/agg.apOpen:0),"")].join("");
  document.querySelector("#ar-aging-chart").innerHTML = barList(agg.arAging);
  document.querySelector("#ap-aging-chart").innerHTML = barList(agg.apAging);

  const peak = rows.map((r)=>{const h=r.services.filter(s=>state.service==="all"||s.service===state.service).reduce((a,s)=>a+Number(s.hours),0);return {month:r.month,hours:h,practical:h/(data.meta.capacity_hours*data.meta.billable_capacity_rate)}}).sort((a,b)=>b.practical-a.practical)[0];
  document.querySelector("#capacity-kpis").innerHTML = [kpi(t.occupancyKpi,fmtPercent(agg.occupancy),`${fmtNumber.format(agg.hours)} h`),kpi(t.practicalKpi,fmtPercent(agg.practicalOccupancy),""),kpi(lang==="pt"?"Mês de pico":"Peak month",peak?monthName(peak.month):"—",peak?fmtPercent(peak.practical):""),kpi(lang==="pt"?"Horas ociosas teóricas":"Theoretical idle hours",fmtNumber.format(Math.max(0,rows.length*data.meta.capacity_hours-agg.hours)),"")].join("");
  document.querySelector("#capacity-chart").innerHTML = capacityChart(rows);
  document.querySelector("#capacity-actions").innerHTML = lang === "pt" ? "<li>Em meses acima de 85% da capacidade faturável, reduzir descontos e proteger margem.</li><li>Concentrar campanhas nos meses abaixo de 60%.</li><li>Acompanhar faltas, cancelamentos e remarcações quando a agenda real estiver disponível.</li><li>Usar lucro por hora para decidir quais serviços promover nos horários escassos.</li>" : "<li>Above 85% of billable capacity, reduce discounting and protect margin.</li><li>Concentrate campaigns in months below 60%.</li><li>Track no-shows, cancellations, and rescheduling when actual appointments become available.</li><li>Use profit per hour to decide which services to promote in scarce slots.</li>";
  document.querySelector("#service-hours-chart").innerHTML = barList(Object.fromEntries(services.map((s)=>[s.service,s.hours])),(v)=>`${fmtNumber.format(v)} h`);
}

function populateFilters() {
  const years = [...new Set(data.monthly.map((row)=>row.month.slice(0,4)))].sort();
  yearFilter.innerHTML = `<option value="all">${t.allYears}</option>${years.map((year)=>`<option value="${year}">${year}</option>`).join("")}`;
  yearFilter.value = state.year;
  const months = Array.from({length:12},(_,i)=>String(i+1).padStart(2,"0"));
  monthFilter.innerHTML = `<option value="all">${t.allMonths}</option>${months.map((m)=>`<option value="${m}">${new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US",{month:"long",timeZone:"UTC"}).format(new Date(`2026-${m}-01T00:00:00Z`))}</option>`).join("")}`;
  const services = Object.keys(data.service_model).sort();
  serviceFilter.innerHTML = `<option value="all">${t.allServices}</option>${services.map((service)=>`<option value="${service}">${service}</option>`).join("")}`;
}

document.querySelectorAll(".dashboard-tabs button").forEach((button)=>button.addEventListener("click",()=>{state.view=button.dataset.view;document.querySelectorAll(".dashboard-tabs button").forEach((b)=>b.classList.toggle("active",b===button));document.querySelectorAll(".dashboard-view").forEach((view)=>view.classList.toggle("active",view.id===`view-${state.view}`));}));
yearFilter.addEventListener("change",()=>{state.year=yearFilter.value;render();});
monthFilter.addEventListener("change",()=>{state.month=monthFilter.value;render();});
serviceFilter.addEventListener("change",()=>{state.service=serviceFilter.value;render();});
document.querySelector("#reset-filters").addEventListener("click",()=>{state.year="2026";state.month="all";state.service="all";yearFilter.value=state.year;monthFilter.value=state.month;serviceFilter.value=state.service;render();});

fetch("dashboard-data.json")
  .then((response)=>{if(!response.ok) throw new Error("Data unavailable"); return response.json();})
  .then((payload)=>{data=payload;populateFilters();render();})
  .catch(()=>{document.querySelector("main").innerHTML=`<p>${t.noData}</p>`;});
